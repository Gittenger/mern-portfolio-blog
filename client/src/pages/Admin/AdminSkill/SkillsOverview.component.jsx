import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApiData } from '../../../utils/hooks'

import { OverviewContainer, Row } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index'
import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const SkillsOverview = () => {
	const [messageData, setMessageData] = useState({
		error: false,
		message: '',
	})

	const url = `${process.env.REACT_APP_API}/skills`
	const [apiData, dataProcessed] = useApiData(url)
	const { token } = checkAuthToken()
	const { error, message } = messageData

	const handleDelete = (e) => {
		const deleteUrl = `${process.env.REACT_APP_API}/skills/${e.target.dataset.id}`
		fetch(deleteUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				console.log(res)
				window.location.reload()
			})
			.catch((err) => console.error(err))
	}

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
		Spinner,
		DisplayMessage,
	} = CIndex

	const { data } = apiData

	return (
		<OverviewContainer>
			<Link to="/admin/create-skill">Create Skill</Link>
			<button onClick={handleDeleteAllClick}>Delete All</button>
			<div className="delete-prompt" id="delete-prompt">
				<PSmall>Are you sure you want to delete all the posts?</PSmall>
				<button onClick={handleDeleteYes}>Yes, delete all</button>
				<button onClick={handleDeleteNo}>No</button>
				<DisplayMessage message={message} className={error ? 'error' : ''} />
			</div>
			<ul>
				{dataProcessed ? (
					Object.keys(data).map((skill, i) => (
						<li key={i}>
							<Row>
								<PSmall>Skill name: {data[skill].name}</PSmall>
								<button data-id={data[skill]._id} onClick={handleDelete}>
									Delete
								</button>
								<Link
									to={`/admin/edit-skill/${data[skill].name.toLowerCase()}`}
								>
									Edit Skill
								</Link>
							</Row>
						</li>
					))
				) : (
					<Spinner />
				)}
			</ul>
		</OverviewContainer>
	)
}

export default SkillsOverview
