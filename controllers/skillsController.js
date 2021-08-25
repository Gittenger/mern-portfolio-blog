const Skill = require('../models/skillSchema')
const catchAsync = require('../utils/catchAsync')

exports.createCard = catchAsync(async (req, res) => {
	const { name, desc, img, years, bullet } = req.body

	const skill = await Skill.create({ name, desc, img, years, bullet })

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
