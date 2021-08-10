const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
	name: {
		type: String,
		default: 'default.jpg',
	},
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image
