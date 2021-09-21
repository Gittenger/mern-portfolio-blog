import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { remark } from 'remark'

import { EditPostContainer } from './EditPost.styles'

const EditPost = () => {
	const [values, setValues] = useState({
		title: '',
		excerpt: '',
		date: '',
		content: '',
		id: '',
	})
	const { title, excerpt, date, content } = values
	const { slug } = useParams()

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	const url = `${process.env.REACT_APP_API}/posts/${slug}`

	useEffect(() => {
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
					title: data.title,
					excerpt: data.excerpt,
					date: data.date,
					content: data.content,
				})
			})
			.catch((err) => console.error(err))
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		const transformedMarkdown = await remark().process(content)
		console.log(String(transformedMarkdown))

		const formData = new FormData()
		formData.append('title', title)
		formData.append('excerpt', excerpt)
		formData.append('date', date)
		formData.append('content', String(transformedMarkdown))

		fetch(`${process.env.REACT_APP_API}/posts/${values.id}`, {
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
					placeholder="content"
				></textarea>

				<button onClick={handleSubmit}>Submit</button>
			</form>
		</EditPostContainer>
	)
}

export default EditPost
