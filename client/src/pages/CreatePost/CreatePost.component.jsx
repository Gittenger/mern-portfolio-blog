import React, { useState } from 'react'
import { remark } from 'remark'

import { CreatePostContentContainer } from './CreatePost.styles'

const CreatePost = () => {
	const [values, setValues] = useState({
		title: '',
		excerpt: '',
		date: '',
		content: '',
	})
	const { title, excerpt, date, content } = values

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const transformedMarkdown = await remark().process(content)

		const formData = new FormData()
		formData.append('title', title)
		formData.append('excerpt', excerpt)
		formData.append('date', date)
		formData.append('content', String(transformedMarkdown))

		fetch(`${process.env.REACT_APP_API}/posts`, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.log(err))
	}

	return (
		<CreatePostContentContainer>
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
					placeholder="content"
				></textarea>

				<button onClick={handleSubmit}>Submit</button>
			</form>
		</CreatePostContentContainer>
	)
}

export default CreatePost
