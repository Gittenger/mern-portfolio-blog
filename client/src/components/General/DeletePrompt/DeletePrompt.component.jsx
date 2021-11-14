import React, { useState } from 'react'

import {} from './DeletePrompt.styles'
import CIndex from '../../components.index'
import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const DeletePrompt = ({ url }) => {
	const [messageData, setMessageData] = useState({
		error: false,
		message: '',
	})

	const { token } = checkAuthToken()
	const { error, message } = messageData

	const handleDeleteAllClick = () => {
		document.getElementById('delete-prompt').style.display = 'block'
		setTimeout(() => {
			document.getElementById('delete-prompt').classList.add('active')
		}, 100)
	}

	const handleDeleteYes = () => {
		fetch(url, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				setMessageData({
					error: false,
					message: res.message,
				})
				window.location.reload()
			})
			.catch((err) => {
				setMessageData({
					error: true,
					message: 'There was an error submitting the data',
				})
			})
	}

	const handleDeleteNo = () => {
		document.getElementById('delete-prompt').classList.remove('active')
		setTimeout(() => {
			document.getElementById('delete-prompt').style.display = 'none'
		}, 400)
	}

	const {
		TComp: { PSmall },
		DisplayMessage,
	} = CIndex

	return (
		<div>
			<button onClick={handleDeleteAllClick}>Delete All</button>
			<div className="delete-prompt" id="delete-prompt">
				<PSmall>Are you sure you want to delete all the posts?</PSmall>
				<button onClick={handleDeleteYes}>Yes, delete all</button>
				<button onClick={handleDeleteNo}>No</button>
			</div>
			<DisplayMessage message={message} className={error ? 'error' : ''} />
		</div>
	)
}

export default DeletePrompt
