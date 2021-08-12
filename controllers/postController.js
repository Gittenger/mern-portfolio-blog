const Markdown = require('../models/postSchema')
const slugify = require('slugify')

exports.getFile = async (req, res) => {
	const id = req.params.id

	const md = await Markdown.findById(id)

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
	const { title, excerpt, date, content } = req.body

	const slug = slugify.default(title, {
		lower: true,
	})

	const mds = await Markdown.create({ title, excerpt, slug, date, content })

	res.status(200).json({
		message: 'post successfully uploaded',
		data: mds,
	})
}
