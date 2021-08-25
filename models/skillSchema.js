const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	years: {
		type: String,
		required: false,
	},
	bullet: {
		type: [String],
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
})

const Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill
