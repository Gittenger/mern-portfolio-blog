import React from 'react'
import { Link } from 'react-router-dom'
import { useApiData } from '../../../utils/hooks'

import { OverviewContainer, Row } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index'
import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const PostsOverview = () => {
	const url = `${process.env.REACT_APP_API}/projects`
	const [apiData, dataProcessed] = useApiData(url)
	const { token } = checkAuthToken()

	const handleDelete = (e) => {
		const deleteUrl = `${process.env.REACT_APP_API}/projects/${e.target.dataset.id}`
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

	const {
		TComp: { PSmall },
	} = CIndex

	const { data } = apiData

	return (
		<OverviewContainer>
			<Link to="/admin/create-project">Create Project</Link>
			<ul>
				{dataProcessed &&
					Object.keys(data).map((project, i) => (
						<li key={i}>
							<Row>
								<PSmall>Project name: {data[project].name}</PSmall>
								<button data-id={data[project]._id} onClick={handleDelete}>
									Delete
								</button>
								<Link to={`/admin/edit-project/${data[project].slug}`}>
									Edit Project
								</Link>
							</Row>
						</li>
					))}
			</ul>
		</OverviewContainer>
	)
}

export default PostsOverview
