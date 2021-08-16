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
	/* later add an image
	 Can upload image when creating new project
	 image can be uploaded onto server as a static file
	 to be referenced by client
	 Images for:::
	 gif
	 cover
	 other images

	 Also create techStack icons and create component which renders them conditionally
	 Whichever techStack strings appear in the array will determine which icons are rendered

	 Make sure to make certain fields unique, such as slug since it's used for lookup
	 */
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
