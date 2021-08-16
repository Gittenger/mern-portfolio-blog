import React, { useState } from 'react'

import {} from './AddProject.styles'

const AddProject = () => {
	const [values, setValues] = useState({
		name: '',
		description: '',
		slug: '',
		techStack: '',
		link: '',
		descriptionLong: '',
	})

	const url = `${process.env.REACT_APP_API}/projects`

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', name)
		formData.append('description', description)
		formData.append('descriptionLong', descriptionLong)
		formData.append('slug', slug)
		formData.append('link', link)
		formData.append('techStack', techStack)

		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.error(err))
	}

	const { name, description, descriptionLong, slug, techStack, link } = values
	return (
		<form>
			<input onChange={handleChange} type="text" value={name} name="name" />
			<input
				onChange={handleChange}
				type="text"
				value={description}
				name="description"
			/>
			<input onChange={handleChange} type="text" value={slug} name="slug" />
			<input
				onChange={handleChange}
				type="text"
				value={techStack}
				name="techStack"
			/>
			<input onChange={handleChange} type="text" value={link} name="link" />
			<textarea
				name="descriptionLong"
				cols="30"
				rows="10"
				onChange={handleChange}
			></textarea>
			<button onClick={handleSubmit}>Submit</button>
		</form>
	)
}
export default AddProject
