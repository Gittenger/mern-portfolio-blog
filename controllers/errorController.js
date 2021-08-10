const AppError = require('../utils/appError')

const handleCastErrorDB = (err) => {
	const message = `Invalid ${err.path}: ${err.value}`
	return new AppError(message, 400)
}

const handleDuplicateFieldsDB = (err) => {
	const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
	const message = `Duplicate field value: ${value} Please use another value`
	return new AppError(message, 400)
}

const handleValidationErrorDB = (err) => {
	const errors = Object.values(err.errors).map((el) => el.message)
	const message = `Invalid input data: ${errors.join('. ')}`
	return new AppError(message, 400)
}

const handleJWTError = (err) =>
	new AppError('Invalid login token. Please log in again', 401)

const handleExpiredToken = (err) =>
	new AppError('Login token expired. Please log in again', 401)

const sendErrorDev = (err, req, res) => {
	return res.status(err.statusCode).json({
		status: err.status,
		error: err,
		message: err.message,
		stack: err.stack,
	})
}

const sendErrorProd = (err, req, res) => {
	if (err.isOperational) {
		return res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		})
	} else {
		console.log(err)
		return res.status(500).json({
			status: 'ERROR',
			message: 'Oops! Something went very wrong. :(',
		})
	}
}

module.exports = (err, req, res, next) => {
	// should be set when error created, if not, unknown error (500)
	err.statusCode = err.statusCode || 500
	err.status = err.status || 'error'

	if (process.env.NODE_ENV === 'development') {
		sendErrorDev(err, req, res)
	} else if (process.env.NODE_ENV === 'production') {
		let error = Object.assign(err)

		if (err.name === 'CastError') error = handleCastErrorDB(error)
		if (err.code === 11000) error = handleDuplicateFieldsDB(error)
		if (err.name === 'ValidationError') error = handleValidationErrorDB(error)
		if (err.name === 'JsonWebTokenError') error = handleJWTError(error)
		if (err.name === 'TokenExpiredError') error = handleExpiredToken(error)

		sendErrorProd(error, req, res)
	}
}
