const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
	},
	descriptionLong: {
		type: String,
		required: true,
	},
	techStack: {
		type: [String],
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	github: {
		type: String,
		default: 'https://www.github.com/Gittenger',
	},
	youtubeId: {
		type: String,
		default: 'aaa',
	},
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
