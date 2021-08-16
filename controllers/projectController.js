const Project = require('../models/projectSchema')
const catchAsync = require('../utils/catchAsync')

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
	const project = await Project.create({ ...req.body })

	res.status(200).json({
		message: 'success',
		data: project,
	})
})
