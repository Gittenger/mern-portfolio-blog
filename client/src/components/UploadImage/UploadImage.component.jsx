import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { UploadImageContainer } from './UploadImage.styles'
import auth from '../../utils/auth.js'
import CIndex from '../components.index.js'

const { checkAuthToken } = auth

const UploadImage = () => {
	const {
		TComp: { P },
	} = CIndex
	const { token } = checkAuthToken()
	const [selectedFile, setSelectedFile] = useState(null)

	const handleSubmit = e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('image', selectedFile)

		fetch(`${process.env.REACT_APP_API}/images/upload`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		})
			.then(res => res.json())
			.then(() => {
				window.location.reload()
			})
			.catch(err => console.error(err))
	}

	const handleChange = e => {
		setSelectedFile(e.target.files[0])
	}

	const ImageForm = () => (
		<form>
			<input type="file" onChange={handleChange} />
			<button onClick={handleSubmit}>Submit</button>
		</form>
	)

	return (
		<UploadImageContainer>
			<P>Upload Image:</P>
			{ImageForm()}
			<Link to="/admin">⇽ Back to admin</Link>
		</UploadImageContainer>
	)
}

export default UploadImage
