const Markdown = require('../models/postSchema')
const ServerUpdated = require('../models/serverUpdated')
const slugify = require('slugify')
const formidable = require('formidable')

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

exports.createPost = async (req, res) => {
	const form = new formidable.IncomingForm()

	form.parse(req, async (err, fields) => {
		const { title, excerpt, date, content } = fields

		const slug = slugify.default(title, {
			lower: true,
		})

		const mds = await Markdown.create({ title, excerpt, date, slug, content })

		const serverUpdateRes = await ServerUpdated.find()
		const serverUpdateObj = serverUpdateRes[0]

		await ServerUpdated.findByIdAndUpdate(serverUpdateObj._id, {
			value: Date.now(),
		})

		res.status(200).json({
			message: 'post successfully uploaded',
			data: mds,
		})
	})
}

exports.deletePost = async (req, res) => {
	const id = req.params.id

	const post = await Markdown.findById(id)

	if (post) {
		await Markdown.findByIdAndDelete(id)

		const serverUpdateRes = await ServerUpdated.find()
		const serverUpdateObj = serverUpdateRes[0]

		await ServerUpdated.findByIdAndUpdate(serverUpdateObj._id, {
			value: Date.now(),
		})

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

exports.updatePost = async (req, res) => {
	const form = new formidable.IncomingForm()

	form.parse(req, async (err, fields) => {
		const { title, excerpt, date, content } = fields

		const slug = slugify.default(title, {
			lower: true,
		})

		const md = await Markdown.findByIdAndUpdate(req.params.id, {
			title,
			excerpt,
			date,
			slug,
			content,
		})

		const serverUpdateRes = await ServerUpdated.find()
		const serverUpdateObj = serverUpdateRes[0]

		await ServerUpdated.findByIdAndUpdate(serverUpdateObj._id, {
			value: Date.now(),
		})

		res.status(200).json({
			message: 'post successfully updated',
			data: md,
		})
	})
}
