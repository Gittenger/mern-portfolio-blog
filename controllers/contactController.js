const { EmailContact } = require('../utils/email')
const catchAsync = require('../utils/catchAsync')

exports.sendEmail = catchAsync(async (req, res, next) => {
	const { name, email, desc, phone, sendCopy } = req.body

	if (name && email && desc && phone) {
		const mail = new EmailContact({ name, email, desc, phone })
		const sent = await mail.sendGreeting()

		if (sendCopy) {
			const copy = await mail.sendCopy()
		}

		res.status(200).json({
			status: 'success',
			message: `attempted to send email with following params: ${name}, ${email}, ${desc}`,
		})
	} else {
		res.status(400).json({
			status: 'failed',
			message: 'Name, email, phone and desc are required fields',
		})
	}
})
