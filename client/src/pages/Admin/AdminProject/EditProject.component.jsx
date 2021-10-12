import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { remark } from 'remark'

import { EditProjectContainer } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index.js'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const EditProject = () => {
	const [values, setValues] = useState({
		name: '',
		description: '',
		descriptionLong: '',
		link: '',
		github: '',
		youtubeId: '',
		techStack: '',
		id: '',
	})
	const [messageData, setMessageData] = useState({
		error: false,
		message: '',
	})

	const { error, message } = messageData

	const {
		name,
		description,
		descriptionLong,
		link,
		github,
		youtubeId,
		techStack,
	} = values
	const { slug } = useParams()
	const { token } = checkAuthToken()

	const handleChange = (e) => {
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
			.then((res) => res.json())
			.then(({ data }) => {
				setValues({
					name: data.name,
					link: data.link,
					description: data.description,
					descriptionLong: data.descriptionLong,
					github: data.github,
					youtubeId: data.youtubeId,
					techStack: data.techStack.join(', '),
					id: data._id,
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
					name="youtubeId"
					type="text"
					onChange={handleChange}
					value={youtubeId}
					placeholder="youtubeId"
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

			<DisplayMessage message={message} className={error ? 'error' : ''} />
		</EditProjectContainer>
	)
}

export default EditProject
