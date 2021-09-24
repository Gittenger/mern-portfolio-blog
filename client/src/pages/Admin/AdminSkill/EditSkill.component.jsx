import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { EditProjectContainer } from '../AdminGeneral.styles'

const EditSkill = () => {
	const [values, setValues] = useState({
		name: '',
		desc: '',
		img: '',
		years: '',
		bullet: '',
		id: '',
	})
	const { name, desc, img, years, bullet } = values
	const { slug } = useParams()

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	useEffect(() => {
		const url = `${process.env.REACT_APP_API}/skills/${slug}`

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
					desc: data.desc,
					img: data.img,
					years: data.years,
					bullet: data.bullet.join(':, '),
					id: data._id,
				})
			})
			.catch((err) => console.error(err))
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()

		const submitUrl = `${process.env.REACT_APP_API}/skills/${values.id}`

		const formData = new FormData()
		formData.append('name', name)
		formData.append('desc', desc)
		formData.append('img', img)
		formData.append('years', years)
		formData.append('bullet', bullet)

		fetch(submitUrl, {
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
		<EditProjectContainer>
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
		</EditProjectContainer>
	)
}

export default EditSkill
