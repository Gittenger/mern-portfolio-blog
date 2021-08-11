const Markdown = require('../models/postSchema')

exports.getFile = async (req, res) => {
	const id = req.params.id

	const md = await Markdown.findById(id)

	res.status(200).json({
		message: 'success',
		data: md,
	})
}

exports.getAll = async (req, res) => {
	const mds = await Markdown.find().select('title excerpt date')

	res.status(200).json({
		message: 'success',
		data: mds,
	})
}
