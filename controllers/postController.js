const Markdown = require('../models/postSchema')
const slugify = require('slugify')
const formidable = require('formidable')
const updateServer = require('../utils/updateServer')

exports.getFile = async (req, res) => {
	const slug = req.params.slug

	const md = await Markdown.findOne({ slug })

	res.status(200).json({
		message: 'success',
		data: md,
	})
}

exports.getAll = async (req, res) => {
	const mds = await Markdown.find()

	res.status(200).json({
		message: 'success',
		data: mds,
	})
}

exports.deletePost = async (req, res) => {
	const id = req.params.id

	const post = await Markdown.findById(id)

	if (post) {
		await Markdown.findByIdAndDelete(id)

		await updateServer()

		res.status(204).json({
			message: 'post successfully deleted',
			data: null,
		})
	} else {
		return res.status(404).json({
			message: 'no post with that id',
		})
	}
}

exports.createPost = async (req, res) => {
	const form = new formidable.IncomingForm()

	form.parse(req, async (err, fields) => {
		const slug = slugify(fields.title, {
			lower: true,
		})

		const mds = await Markdown.create({ ...fields, slug })

		await updateServer()

		res.status(200).json({
			message: 'post successfully uploaded',
			data: mds,
		})
	})
}

exports.updatePost = async (req, res) => {
	const id = req.params.id
	if (id) {
		const form = new formidable.IncomingForm()

		form.parse(req, async (err, fields) => {
			const slug = slugify(fields.title, {
				lower: true,
			})

			const md = await Markdown.findByIdAndUpdate(id, {
				...fields,
				slug,
			})

			await updateServer()

			res.status(200).json({
				message: 'post successfully updated',
				data: md,
			})
		})
	} else {
		res.status(404).json({
			messsage: 'no post found with that id',
		})
	}
}
