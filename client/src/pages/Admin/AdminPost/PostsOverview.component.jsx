import React from 'react'
import { Link } from 'react-router-dom'
import { useApiData } from '../../../utils/hooks.js'

import { OverviewContainer, Row } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index'
import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const PostsOverview = () => {
	const url = `${process.env.REACT_APP_API}/posts`
	const [apiData, dataProcessed] = useApiData(url)
	const { token } = checkAuthToken()

	const handleDelete = (e) => {
		const deleteUrl = `${process.env.REACT_APP_API}/posts/${e.target.dataset.id}`
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
		Spinner,
		DeletePrompt,
	} = CIndex

	const { data } = apiData

	return (
		<OverviewContainer>
			<Link to="/admin/create-post">Create Post</Link>
			<DeletePrompt url={url} />
			<ul>
				{dataProcessed ? (
					Object.keys(data).map((post, i) => (
						<li key={i}>
							<Row>
								<PSmall>Post name: {data[post].title}</PSmall>
								<button data-id={data[post]._id} onClick={handleDelete}>
									Delete
								</button>
								<Link to={`/admin/edit-post/${data[post].slug}`}>
									Edit Post
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

export default PostsOverview
