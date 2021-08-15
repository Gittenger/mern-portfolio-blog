import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
	ForgotPasswordContainer,
	EmailInput,
	Form,
	SubmitButton,
} from './ForgotPassword.styles'

import CIndex from '../../components.index.js'

const ForgotPassword = () => {
	const { TComp } = CIndex
	const { P } = TComp

	const [values, setValues] = useState({ email: '', error: '', successMsg: '' })

	const { email, error, successMsg } = values

	const handleChange = (e) => {
		setValues({ ...values, email: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch(`${process.env.REACT_APP_API}/users/forgotPassword`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.error) {
					setValues({ ...values, error: res.message })
				} else {
					setValues({
						email: '',
						error: '',
						successMsg: 'Reset link sent to email',
					})
				}
			})
			.catch((err) => console.error(err))
	}

	return (
		<ForgotPasswordContainer>
			<P>
				Submit your email now to send a link to yourself for resetting your
				password
			</P>
			<Form>
				<label for="email">Email:</label>
				<EmailInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
			</Form>
			<SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
			{error && <p style={{ color: 'red' }}> {error}</p>}
			{successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
			<Link to="/admin">⇽ Back to admin</Link>
		</ForgotPasswordContainer>
	)
}

export default ForgotPassword
