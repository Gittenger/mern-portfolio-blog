const Markdown = require('../models/postSchema')
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
	const mds = await Markdown.find().select('title excerpt date slug')

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

		res.status(200).json({
			message: 'post successfully uploaded',
			data: mds,
		})
	})
}
