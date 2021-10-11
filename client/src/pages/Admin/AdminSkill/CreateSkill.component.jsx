import React, { useState } from 'react'

import { EditPostContainer } from '../AdminGeneral.styles'
import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const CreateSkill = () => {
	const [values, setValues] = useState({
		name: '',
		desc: '',
		img: '',
		years: '',
		bullet: '',
	})

	const url = `${process.env.REACT_APP_API}/skills`
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
		formData.append('desc', desc)
		formData.append('img', img)
		formData.append('years', years)
		formData.append('bullet', bullet)

		fetch(url, {
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
			.catch((err) => console.error(err))
	}

	const { name, desc, img, years, bullet } = values
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
					value={desc}
					name="desc"
					placeholder="description"
				/>
				<input
					onChange={handleChange}
					type="text"
					value={img}
					name="img"
					placeholder="image"
				/>
				<input
					onChange={handleChange}
					type="text"
					value={years}
					name="years"
					placeholder="Years exp."
				/>
				<textarea
					name="bullet"
					cols="30"
					rows="10"
					onChange={handleChange}
					value={bullet}
					placeholder="list of bullet points, sep = :,"
				></textarea>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</EditPostContainer>
	)
}
export default CreateSkill
