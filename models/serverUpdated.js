const mongoose = require('mongoose')

const serverUpdatedSchema = new mongoose.Schema({
	value: {
		type: Date,
		required: true,
	},
})

const ServerUpdated = mongoose.model('ServerUpdated', serverUpdatedSchema)

module.exports = ServerUpdated
