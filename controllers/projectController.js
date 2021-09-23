const Project = require('../models/projectSchema')
const catchAsync = require('../utils/catchAsync')
const formidable = require('formidable')

exports.getAll = catchAsync(async (req, res, next) => {
	const projects = await Project.find()

	res.status(200).json({
		message: 'success',
		data: projects,
	})
})

exports.getOne = catchAsync(async (req, res, next) => {
	const project = await Project.findOne({ slug: req.params.slug })

	res.status(200).json({
		message: 'success',
		data: project,
	})
})

exports.createProject = catchAsync(async (req, res, next) => {
	const form = new formidable.IncomingForm()

	form.parse(req, async (err, fields) => {
		const slug = slugify.default(fields.name, {
			lower: true,
		})
		const techStack = fields.techStack.split(', ')
		const project = await Project.create({ ...fields, slug, techStack })

		res.status(200).json({
			message: 'success',
			data: project,
		})
	})
})
