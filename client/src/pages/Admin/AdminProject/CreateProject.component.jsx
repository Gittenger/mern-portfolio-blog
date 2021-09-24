import React, { useState } from 'react'

import { EditPostContainer } from '../AdminGeneral.styles'

const CreateProject = () => {
	const [values, setValues] = useState({
		name: '',
		description: '',
		techStack: '',
		link: '',
		github: '',
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
		formData.append('link', link)
		formData.append('github', github)
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

	const { name, description, descriptionLong, techStack, link, github } = values
	return (
		<EditPostContainer>
			<form>
				<input
					onChange={handleChange}
					type="text"
					value={name}
					name="name"
					placeholder="name"
				/>
				<input
					onChange={handleChange}
					type="text"
					value={description}
					name="description"
					placeholder="description"
				/>
				<input
					onChange={handleChange}
					type="text"
					value={techStack}
					name="techStack"
					placeholder="techStack"
				/>
				<input
					onChange={handleChange}
					type="text"
					value={link}
					name="link"
					placeholder="link"
				/>
				<input
					onChange={handleChange}
					type="text"
					value={github}
					name="github"
					placeholder="github"
				/>
				<textarea
					name="descriptionLong"
					cols="30"
					rows="10"
					onChange={handleChange}
					value={descriptionLong}
					placeholder="descriptionLong"
				></textarea>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</EditPostContainer>
	)
}
export default CreateProject
