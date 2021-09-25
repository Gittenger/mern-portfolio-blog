const Project = require('../models/projectSchema')
const ServerUpdated = require('../models/serverUpdated')
const catchAsync = require('../utils/catchAsync')
const formidable = require('formidable')
const slugify = require('slugify')
const updateServer = require('../utils/updateServer')

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
		const slug = slugify(fields.name, {
			lower: true,
		})
		const techStack = fields.techStack.split(', ')
		const project = await Project.create({ ...fields, slug, techStack })

		await updateServer()

		res.status(200).json({
			message: 'success',
			data: project,
		})
	})
})

exports.updateProject = async (req, res, next) => {
	const id = req.params.id
	if (id) {
		const form = new formidable.IncomingForm()

		form.parse(req, async (err, fields) => {
			const slug = slugify(fields.name, {
				lower: true,
			})
			const techStack = fields.techStack.split(', ')
			const project = await Project.findByIdAndUpdate(id, {
				...fields,
				slug,
				techStack,
			})

			await updateServer()

			res.status(200).json({
				message: 'project successfully updated',
				data: project,
			})
		})
	} else {
		res.status(404).json({
			message: 'no project found with that ID',
		})
	}
}

exports.deleteProject = catchAsync(async (req, res, next) => {
	const id = req.params.id

	const project = await Project.findById(id)

	if (project) {
		await Project.findByIdAndDelete(id)

		await updateServer()

		res.status(204).json({
			message: 'Project successfully deleted',
			data: null,
		})
	} else {
		return res.status(404).json({
			message: 'no project with that id',
		})
	}
})
