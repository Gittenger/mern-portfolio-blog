import React, { useState } from 'react'
import { remark } from 'remark'

import { EditPostContainer } from '../AdminGeneral.styles'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const CreatePost = () => {
	const [values, setValues] = useState({
		title: '',
		excerpt: '',
		date: '',
		content: '',
	})
	const { title, excerpt, date, content } = values
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
		formData.append('title', title)
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
				console.log(res)
			})
			.catch((err) => console.log(err))
	}

	return (
		<EditPostContainer>
			<form>
				<input
					name="title"
					type="text"
					onChange={handleChange}
					value={title}
					placeholder="title"
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
		</EditPostContainer>
	)
}

export default CreatePost
