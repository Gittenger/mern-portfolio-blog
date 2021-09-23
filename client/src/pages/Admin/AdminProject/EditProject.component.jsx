import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { remark } from 'remark'

import { EditProjectContainer } from '../AdminGeneral.styles'

const EditProject = () => {
	const [values, setValues] = useState({
		name: '',
		description: '',
		descriptionLong: '',
		link: '',
		github: '',
		techStack: '',
		id: '',
	})
	const { name, description, descriptionLong, link, github, techStack } = values
	const { slug } = useParams()

	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	useEffect(() => {
		const url = `${process.env.REACT_APP_API}/projects/${slug}`

		fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(({ data }) => {
				setValues({
					name: data.name,
					link: data.link,
					description: data.description,
					descriptionLong: data.descriptionLong,
					github: data.github,
					techStack: data.techStack.join(', '),
					id: data._id,
				})
			})
			.catch(err => console.error(err))
	}, [])

	const handleSubmit = async e => {
		e.preventDefault()

		const submitUrl = `${process.env.REACT_APP_API}/projects/${values.id}`
		const transformedMarkdown = await remark().process(descriptionLong)

		const formData = new FormData()
		formData.append('name', name)
		formData.append('description', description)
		formData.append('descriptionLong', String(transformedMarkdown))
		formData.append('link', link)
		formData.append('github', github)
		formData.append('techStack', techStack)

		fetch(submitUrl, {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
			})
			.catch(err => console.log(err))
	}

	return (
		<EditProjectContainer>
			<form>
				<input
					name="name"
					type="text"
					onChange={handleChange}
					value={name}
					placeholder="name"
				/>
				<input
					name="description"
					type="text"
					onChange={handleChange}
					value={description}
					placeholder="description"
				/>
				<input
					name="link"
					type="text"
					onChange={handleChange}
					value={link}
					placeholder="link"
				/>
				<input
					name="github"
					type="text"
					onChange={handleChange}
					value={github}
					placeholder="github"
				/>
				<input
					name="techStack"
					type="text"
					onChange={handleChange}
					value={techStack}
					placeholder="Tech stack, separated by commas"
				/>
				<textarea
					name="descriptionLong"
					cols="30"
					rows="10"
					onChange={handleChange}
					placeholder="Full markdown description"
					value={descriptionLong}
				></textarea>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</EditProjectContainer>
	)
}

export default EditProject
