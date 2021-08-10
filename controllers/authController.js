const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { promisify } = require('util')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const { EmailUser } = require('../utils/email')

const signToken = (id) =>
	jwt.sign({ id }, process.env.JWT_SECRET, {
		// env var is string, | 0 converts to int, thus seconds not ms -- 60 days
		expiresIn: process.env.JWT_EXPIRES_IN | 0,
	})

const createAndSendToken = (user, statusCode, req, res) => {
	const token = signToken(user._id)
	const cookieOptions = {
		expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 1000),
		httpOnly: true,
	}

	if (process.env.NODE_ENV === 'production') cookieOptions.secure = true
	res.cookie('jwt', token, cookieOptions)

	user.password = undefined

	const { id, role, name, email } = user

	res.status(statusCode).json({
		status: 'success',
		token,
		user: {
			id,
			role,
			name,
			email,
		},
	})
}

exports.signup = catchAsync(async (req, res, next) => {
	const { name, email, password, passwordConfirm } = req.body

	const user = await User.create({
		name,
		email,
		password,
		passwordConfirm,
	})

	// dashboard link
	const url = `${req.protocol}://${req.get('host')}/myProfile`

	await new EmailUser(user, url).sendWelcome()

	createAndSendToken(user, 201, req, res)
})

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body

	if (!email | !password) {
		return next(new AppError('Email and password required', 400))
	}

	const user = await User.findOne({ email }).select('+password')

	if (!user || !(await user.correctPassword(password, user.password))) {
		return next(new AppError('Incorrect email or password', 401))
	}

	createAndSendToken(user, 200, req, res)
})

exports.protect = catchAsync(async (req, res, next) => {
	let token

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1]
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt
	}

	if (!token) {
		return next(
			new AppError('You are not logged in. Please log in for access', 401)
		)
	}

	// decoded jwt returns payload obj which contains id
	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

	const currentUser = await User.findById(decoded.id)
	if (!currentUser) {
		return next(
			new AppError('The user belonging to this token no longer exists', 401)
		)
	}

	if (currentUser.changedPasswordAfter(decoded.iat)) {
		return next(
			new AppError(
				'This user recently changed their password. Please log in again.',
				401
			)
		)
	}

	// grant access
	req.user = currentUser
	// grant usage to views
	res.locals.user = currentUser
	next()
})

exports.logout = (req, res, next) => {
	res.cookie('jwt', 'logged_out', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
	})
	res.status(200).json({
		status: 'success',
	})
}

exports.restrictTo = (...roles) => (req, res, next) => {
	if (!roles.includes(req.user.role)) {
		return next(
			new AppError('You do not have permission to perform this action', 403)
		)
	}
	next()
}

exports.updatePassword = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.user.id).select('+password')

	if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
		return next(
			new AppError('Incorrect password provided. Please try again', 401)
		)
	}

	user.password = req.body.password
	user.passwordConfirm = req.body.passwordConfirm
	await user.save()

	createAndSendToken(user, 200, req, res)
})

exports.forgotPassword = catchAsync(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email })
	if (!user) {
		return next(new AppError('No user found with that email', 404))
	}

	const resetToken = user.createPasswordResetToken()

	await user.save({ validateBeforeSave: false })

	try {
		const resetUrl = `${process.env.CLIENT_SITE}/reset-password/${resetToken}`

		await new EmailUser(user, resetUrl).sendPasswordReset()

		return res.status(200).json({
			status: 'success',
			message: 'Password reset token sent to email',
		})
	} catch (err) {
		user.passwordResetToken = undefined
		user.passwordResetExpires = undefined
		await user.save({ validateBeforeSave: false })

		return next(
			new AppError('There was an error sending the email. Try again later', 500)
		)
	}
})

exports.resetPassword = catchAsync(async (req, res, next) => {
	// token coming from reset password link
	const hashedToken = crypto
		.createHash('sha256')
		.update(req.params.token)
		.digest('hex')

	// user found from decoding token
	// must not be expired for query to return a user
	const user = await User.findOne({
		passwordResetToken: hashedToken,
		passwordResetExpires: {
			$gt: Date.now(),
		},
	})
	if (!user) {
		return next(new AppError('token is invalid or expired', 400))
	}

	user.password = req.body.password
	user.passwordConfirm = req.body.passwordConfirm
	user.passwordResetToken = req.body.passwordResetToken
	user.passwordResetToken = undefined
	user.passwordResetExpires = undefined

	await user.save()

	// set changedPasswordAt field in document middleware

	createAndSendToken(user, 200, req, res)
})
