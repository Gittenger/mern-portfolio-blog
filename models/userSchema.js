const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'User must have a name'],
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Email address is required'],
		unique: true,
		lowercase: true,
		validate: [
			validator.isEmail,
			'Email address is not valid. Please supply a valid email address',
		],
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
		minLength: 8,
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, 'Please confirm your password'],
		validate: {
			validator: function (el) {
				return el === this.password
			},
			message: 'Passwords are not the same',
		},
	},
	passwordResetToken: String,
	passwordResetExpires: Date,
	passwordChangedAt: Date,
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user',
	},
	active: {
		type: Boolean,
		select: false,
		default: true,
	},
})

// DOCUMENT MIDDLEWARE | this == schema/document
// hash password before saving
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) next()

	this.password = await bcrypt.hash(this.password, 12)
	this.passwordConfirm = undefined
	next()
})

//set passwordChangedAt field on password change
userSchema.pre('save', async function (next) {
	if (!this.isModified('password') || this.isNew) return next()

	// set for 1 second in past
	// prevents protect fn from locking user out if field is set after JWT issued
	this.passwordChangedAt = Date.now() - 1000
	next()
})

// QUERY MIDDLEWARE | this == query
// find only active (not deleted) users
userSchema.pre(/^find/, function (next) {
	this.find({ active: { $ne: false } })
	next()
})

// STATIC METHODS
// compare passwords
userSchema.methods.correctPassword = async function (rqPassword, dbPassword) {
	return await bcrypt.compare(rqPassword, dbPassword)
}

// check if password changed after JWT issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)
		return JWTTimestamp < changedTimeStamp
	}
	return false
}

// create password reset token
userSchema.methods.createPasswordResetToken = function () {
	// generate random characters
	const resetToken = crypto.randomBytes(32).toString('hex')

	// encrypt sequence to be saved on database
	// only saved after calling user.save() in controller
	this.passwordResetToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex')

	this.passwordResetExpires = Date.now() + 10 * 60 * 1000

	return resetToken
}

const User = mongoose.model('User', userSchema)

module.exports = User
