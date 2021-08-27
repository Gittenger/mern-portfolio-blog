const Skill = require('../models/skillSchema')
const ServerUpdated = require('../models/serverUpdated')
const catchAsync = require('../utils/catchAsync')

exports.createCard = catchAsync(async (req, res) => {
	const { name, desc, img, years, bullet } = req.body

	const skill = await Skill.create({ name, desc, img, years, bullet })

	const serverUpdateRes = await ServerUpdated.find()
	const serverUpdateObj = serverUpdateRes[0]

	await ServerUpdated.findByIdAndUpdate(serverUpdateObj._id, {
		value: Date.now(),
	})

	res.status(200).json({
		message: 'Skill card info saved to DB',
		skill,
	})
})

exports.getAll = catchAsync(async (req, res) => {
	const skills = await Skill.find()

	res.status(200).json({
		skills,
	})
})
