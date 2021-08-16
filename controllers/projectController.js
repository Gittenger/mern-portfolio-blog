const Project = require('../models/projectSchema')
const catchAsync = require('../utils/catchAsync')
const formidable = require('formidable')

exports.getAll = catchAsync(async (req, res, next) => {
	const projects = await Project.find().select('name description slug')

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
	const newForm = formidable()
	newForm.parse(req, async (err, fields) => {
		const techStack = fields.techStack.split(', ')
		const project = await Project.create({ ...fields, techStack })

		res.status(200).json({
			message: 'success',
			data: project,
		})
	})
})
