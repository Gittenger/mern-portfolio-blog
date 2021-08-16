import React, { useState } from 'react'
import { remark } from 'remark'

import { BuildPageContentContainer } from './Build.styles'

const Build = () => {
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
		<BuildPageContentContainer>
			<form>
				<input name="title" type="text" onChange={handleChange} value={title} />
				<input
					name="excerpt"
					type="text"
					onChange={handleChange}
					value={excerpt}
				/>
				<input name="date" type="text" onChange={handleChange} value={date} />
				<textarea
					name="content"
					cols="30"
					rows="10"
					onChange={handleChange}
				></textarea>

				<button onClick={handleSubmit}>Submit</button>
			</form>
		</BuildPageContentContainer>
	)
}

export default Build
