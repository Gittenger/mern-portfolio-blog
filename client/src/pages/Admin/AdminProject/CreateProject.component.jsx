import React, { useState } from 'react'

import { EditPostContainer } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index.js'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const CreateProject = () => {
	const [values, setValues] = useState({
		name: '',
		description: '',
		techStack: '',
		link: '',
		github: '',
		youtubeId: '',
		descriptionLong: '',
	})
	const [messageData, setMessageData] = useState({
		error: false,
		message: '',
	})

	const url = `${process.env.REACT_APP_API}/projects`
	const { error, message } = messageData
	const { token } = checkAuthToken()

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
					description: '',
					techStack: '',
					link: '',
					github: '',
					youtubeId: '',
					descriptionLong: '',
				})
			})
			.catch((err) => {
				setMessageData({
					error: true,
					message: 'There was an error submitting the data',
				})
			})
	}

	const {
		name,
		description,
		descriptionLong,
		techStack,
		link,
		github,
		youtubeId,
	} = values

	const { DisplayMessage } = CIndex

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
					name="youtubeId"
					type="text"
					onChange={handleChange}
					value={youtubeId}
					placeholder="youtubeId"
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

			<DisplayMessage message={message} className={error ? 'error' : ''} />
		</EditPostContainer>
	)
}
export default CreateProject
