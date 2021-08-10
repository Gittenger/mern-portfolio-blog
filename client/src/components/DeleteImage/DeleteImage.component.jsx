import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { DeleteImageContainer, GridContainer } from './DeleteImage.styles'
import auth from '../../utils/auth.js'

const { checkAuthToken } = auth

const DeleteImage = () => {
	const { token } = checkAuthToken()
	const [images, setImages] = useState([])

	const getImages = useCallback(() => {
		fetch(`${process.env.REACT_APP_API}/images`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(({ images }) => {
				setImages(
					images.map(({ name, _id }) => ({
						name,
						src: `${process.env.REACT_APP_PUBLIC}/img/${name}`,
						id: _id,
					}))
				)
			})
			.catch(err => console.error(err))
	})

	useEffect(getImages, [])

	const handleDelete = e => {
		const { id, name } = e.target
		const data = {
			filename: name,
			id,
		}

		fetch(`${process.env.REACT_APP_API}/images/delete`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		})
			.then(res => {
				console.log(res)
				getImages()
			})
			.catch(err => console.error(err))
	}

	return (
		<DeleteImageContainer>
			<h2>Delete Images:</h2>
			<Link to="/admin">⇽ Back to admin</Link>
			<GridContainer>
				{images.map(({ name, src, id }) => (
					<div key={id}>
						<img src={src} alt="" />
						<button onClick={handleDelete} name={name} id={id}>
							Delete
						</button>
					</div>
				))}
			</GridContainer>
			<Link to="/admin">⇽ Back to admin</Link>
		</DeleteImageContainer>
	)
}
export default DeleteImage
