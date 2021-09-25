const ServerUpdated = require('../models/serverUpdated')

const updateServer = async () => {
	const serverUpdateRes = await ServerUpdated.find()
	const serverUpdateObj = serverUpdateRes[0]

	await ServerUpdated.findByIdAndUpdate(serverUpdateObj._id, {
		value: Date.now(),
	})
}

module.exports = updateServer
