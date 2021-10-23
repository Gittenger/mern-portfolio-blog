import React, { useState } from 'react'
import { remark } from 'remark'

import { EditPostContainer } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index.js'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const CreatePost = () => {
	const [values, setValues] = useState({
		name: '',
		excerpt: '',
		date: '',
		content: '',
	})
	const [messageData, setMessageData] = useState({
		error: false,
		message: '',
	})

	const { name, excerpt, date, content } = values
	const { error, message } = messageData
	const { token } = checkAuthToken()

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const submitUrl = `${process.env.REACT_APP_API}/posts`
		const transformedMarkdown = await remark().process(content)

		const formData = new FormData()
		formData.append('name', name)
		formData.append('excerpt', excerpt)
		formData.append('date', date)
		formData.append('content', String(transformedMarkdown))

		fetch(submitUrl, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				setMessageData({
					error: false,
					message: res.message,
				})
				setValues({
					name: '',
					excerpt: '',
					date: '',
					content: '',
				})
			})
			.catch((err) => {
				setMessageData({
					error: true,
					message: 'There was an error submitting the data',
				})
			})
	}

	const { DisplayMessage } = CIndex

	return (
		<EditPostContainer>
			<form>
				<input
					name="name"
					type="text"
					onChange={handleChange}
					value={name}
					placeholder="name"
				/>
				<input
					name="excerpt"
					type="text"
					onChange={handleChange}
					value={excerpt}
					placeholder="excerpt"
				/>
				<input
					name="date"
					type="text"
					onChange={handleChange}
					value={date}
					placeholder="date"
				/>
				<textarea
					name="content"
					cols="30"
					rows="10"
					onChange={handleChange}
					value={content}
					placeholder="content"
				></textarea>

				<button onClick={handleSubmit}>Submit</button>
			</form>

			<DisplayMessage message={message} className={error ? 'error' : ''} />
		</EditPostContainer>
	)
}

export default CreatePost
