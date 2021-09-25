const Skill = require('../models/skillSchema')
const catchAsync = require('../utils/catchAsync')
const formidable = require('formidable')
const slugify = require('slugify')
const updateServer = require('../utils/updateServer')

exports.getOne = catchAsync(async (req, res) => {
	const slug = req.params.slug

	const skill = await Skill.findOne({ slug })

	res.status(200).json({
		message: 'found',
		data: skill,
	})
})

exports.getAll = catchAsync(async (req, res) => {
	const skills = await Skill.find()

	res.status(200).json({
		message: 'success',
		data: skills,
	})
})

exports.createCard = catchAsync(async (req, res) => {
	const form = new formidable.IncomingForm()

	form.parse(req, async (err, fields) => {
		const bullet = fields.bullet.split(':, ')
		const slug = slugify(fields.name, {
			lower: true,
		})

		const skill = await Skill.create({ ...fields, slug, bullet })

		await updateServer()

		res.status(200).json({
			message: 'New skill card created and saved to DB',
			skill,
		})
	})
})

exports.updateCard = catchAsync(async (req, res) => {
	const id = req.params.id
	if (id) {
		const form = new formidable.IncomingForm()

		form.parse(req, async (err, fields) => {
			const bullet = fields.bullet.split(':, ')
			const slug = slugify(fields.name, {
				lower: true,
			})

			const skill = await Skill.findByIdAndUpdate(id, {
				...fields,
				slug,
				bullet,
			})

			await updateServer()

			res.status(200).json({
				message: 'New skill card created and saved to DB',
				skill,
			})
		})
	} else {
		res.status(404).json({
			message: 'no Skill found with that ID',
		})
	}
})
