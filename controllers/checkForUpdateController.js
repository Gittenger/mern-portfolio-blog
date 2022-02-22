const ServerUpdated = require('../models/serverUpdated')
const catchAsync = require('../utils/catchAsync')

exports.checkForUpdate = catchAsync(async (req, res) => {
	const lastUpdated = await ServerUpdated.find()

	res.status(200).json({
		lastUpdated: lastUpdated[0].value,
	})
})

exports.createInitValue = catchAsync(async (req, res) => {
	valueObj = await ServerUpdated.create({ value: Date.now() })

	res.status(200).json({
		lastUpdated: valueObj.value,
	})
})
