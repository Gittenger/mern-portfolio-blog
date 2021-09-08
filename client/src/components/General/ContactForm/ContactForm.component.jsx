import React, { useState } from 'react'

import CIndex from '../../components.index.js'
import {
	ContactFormContainer,
	Row,
	ContactFormForm,
	ErrorBox,
	FormInstructions,
} from './ContactForm.styles'

const ContactForm = () => {
	const {
		Checkbox,
		TComp: { H2 },
	} = CIndex
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		desc: '',
		phone: '',
		sendCopy: false,
	})
	const [error, setError] = useState('')

	const { name, email, desc, phone, sendCopy } = formData

	const handleInputChange = (e) => {
		if (e.target.name === 'sendCopy') {
			setFormData({ ...formData, sendCopy: !sendCopy })
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value })
		}
	}

	const performValidation = () => {
		const validationChecks = {
			email: false,
			name: false,
			desc: false,
		}

		const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
		if (emailRegex.test(email)) {
			validationChecks.email = true
		} else {
			setError('Please supply a valid email address')
			return false
		}

		if (name) validationChecks.name = true
		if (desc) validationChecks.desc = true

		if (
			validationChecks.email &&
			validationChecks.name &&
			validationChecks.desc
		) {
			return true
		} else {
			setError('Please supply name, email, and description')
		}
	}

	const handleSubmitForm = (e) => {
		e.preventDefault()

		const validated = performValidation()

		if (validated) {
			fetch(`${process.env.REACT_APP_API}/contact/sendEmail`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then((res) => res.json())
				.then(
					(res) => {
						console.log(res)
						setFormData({
							name: '',
							email: '',
							desc: '',
							phone: '',
							sendCopy: false,
						})
						setError('')
					},
					(err) => {
						setFormData({
							name: '',
							email: '',
							desc: '',
							phone: '',
							sendCopy: false,
						})
						setError('')
						console.log(err)
					}
				)
		} else {
			console.log(
				'Error: Form not submitted, make sure all required fields are filled out.'
			)
		}
	}

	return (
		<ContactFormContainer>
			<H2>Contact Me:</H2>
			<ContactFormForm onSubmit={handleSubmitForm}>
				<FormInstructions>
					If you need a web developer, I'd love to have a conversation with you.
					Fill out this brief form and it'll go straight to my inbox!
				</FormInstructions>
				<Row>
					<label htmlFor="email">Your email:</label>
					<input
						onChange={handleInputChange}
						type="email"
						name="email"
						value={email}
					/>
				</Row>
				<Row>
					<label htmlFor="phone">Phone number:</label>
					<input
						onChange={handleInputChange}
						type="text"
						name="phone"
						value={phone}
					/>
				</Row>
				<Row>
					<label htmlFor="name">Name:</label>
					<input
						onChange={handleInputChange}
						type="text"
						name="name"
						value={name}
					/>
				</Row>
				<Row>
					<label htmlFor="desc">Any comments:</label>
					<textarea
						rows="7"
						onChange={handleInputChange}
						name="desc"
						value={desc}
					/>
				</Row>
				<Checkbox
					handleInputChange={handleInputChange}
					className="checkbox"
					checked={sendCopy}
					name="sendCopy"
					label="Send a copy to your email?"
				/>
				{error ? (
					<ErrorBox>
						<span>{error}</span>
					</ErrorBox>
				) : (
					''
				)}
				<input type="submit" value="Submit!" />
			</ContactFormForm>
		</ContactFormContainer>
	)
}
export default ContactForm
