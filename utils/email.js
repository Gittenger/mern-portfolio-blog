const nodemailer = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid')
const htmlToText = require('html-to-text')
const pug = require('pug')

class EmailUser {
	constructor(user, url) {
		this.to = user.email
		this.name = user.name
		this.url = url
		this.from = `${process.env.SITE_TITLE} <${process.env.EMAIL_FROM}>`
	}

	newTransport() {
		if (process.env.NODE_ENV == 'production') {
			// use sendgrid
			return nodemailer.createTransport(
				nodemailerSendgrid({ apiKey: process.env.SENDGRID_API_KEY })
			)
		} else {
			return nodemailer.createTransport({
				host: process.env.EMAIL_HOST,
				port: process.env.EMAIL_PORT,
				auth: {
					user: process.env.EMAIL_USERNAME,
					pass: process.env.EMAIL_PASSWORD,
				},
			})
		}
	}

	async send(template, subject) {
		const html = pug.renderFile(
			`${__dirname}/../mailTemplates/user/${template}.pug`,
			{
				url: this.url,
				name: this.name,
				subject,
			}
		)

		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			html,
			text: htmlToText.htmlToText(html),
		}

		await this.newTransport().sendMail(mailOptions)
	}

	async sendWelcome() {
		await this.send('welcome', `Welcome to ${process.env.SITE_TITLE}`)
	}

	async sendPasswordReset() {
		await this.send(
			'resetPassword',
			'Your password reset token (expires in 10 minutes)'
		)
	}
}

class EmailContact {
	constructor(formInfo) {
		this.name = formInfo.name
		this.email = formInfo.email
		this.desc = formInfo.desc
		this.phone = formInfo.phone
		this.from = `${process.env.SITE_TITLE} <${process.env.EMAIL_FROM}>`
	}

	newTransport() {
		if (process.env.NODE_ENV === 'production') {
			// Sendgrid
			return nodemailer.createTransport(
				nodemailerSendgrid({ apiKey: process.env.SENDGRID_API_KEY })
			)
		}

		return nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: process.env.EMAIL_PORT,
			auth: {
				user: process.env.EMAIL_USERNAME,
				pass: process.env.EMAIL_PASSWORD,
			},
		})
	}

	async send(template, subject, options = { copy: false }) {
		const html = pug.renderFile(
			`${__dirname}/../mailTemplates/contact/${template}.pug`,
			{
				name: this.name,
				email: this.email,
				desc: this.desc,
				phone: this.phone,
			}
		)

		const mailOptions = {
			from: this.from,
			to: options.copy ? this.email : process.env.MASTER_EMAIL,
			subject,
			html,
			text: htmlToText.htmlToText(html),
		}

		return await this.newTransport().sendMail(mailOptions)
	}

	async sendGreeting() {
		return await this.send(
			'main',
			`New email from your ${process.env.SITE_TITLE} website`
		)
	}

	async sendCopy() {
		return await this.send('copy', `Your email to ${process.env.SITE_TITLE}`, {
			copy: true,
		})
	}
}

module.exports.EmailUser = EmailUser
module.exports.EmailContact = EmailContact
