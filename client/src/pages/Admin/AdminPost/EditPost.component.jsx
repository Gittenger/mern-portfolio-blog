import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { remark } from 'remark'

import { EditPostContainer } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index.js'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const EditPost = () => {
	const [values, setValues] = useState({
		name: '',
		excerpt: '',
		date: '',
		content: '',
		id: '',
	})
	const [messageData, setMessageData] = useState({
		error: false,
		message: '',
	})

	const { name, excerpt, date, content } = values
	const { error, message } = messageData
	const { slug } = useParams()
	const { token } = checkAuthToken()

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	useEffect(() => {
		const url = `${process.env.REACT_APP_API}/posts/${slug}`

		fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(({ data }) => {
				setValues({
					id: data._id,
					name: data.name,
					excerpt: data.excerpt,
					date: data.date,
					content: data.content,
				})
			})
			.catch((err) => {
				setMessageData({
					error: true,
					message: 'There was an error getting the data from the server',
				})
			})
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()

		const submitUrl = `${process.env.REACT_APP_API}/posts/${values.id}`
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
					placeholder="content"
					value={content}
				></textarea>

				<button onClick={handleSubmit}>Submit</button>
			</form>

			<DisplayMessage message={message} className={error ? 'error' : ''} />
		</EditPostContainer>
	)
}

export default EditPost
