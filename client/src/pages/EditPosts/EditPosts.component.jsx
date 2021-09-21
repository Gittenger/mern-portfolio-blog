import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { EditPostsContainer, Row } from './EditPosts.styles'
import CIndex from '../../components/components.index'

const EditPosts = () => {
	const [values, setValues] = useState({
		posts: [],
	})
	const url = `${process.env.REACT_APP_API}/posts`

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			method: 'GET',
		})
			.then((res) => res.json())
			.then((res) => {
				if (!unmounted) {
					setValues({ ...values, posts: res.data })
				}
			})
			.catch((err) => console.error(err))

		return () => {
			unmounted = true
		}
	}, [])

	const handleDelete = (e) => {
		const deleteUrl = `${process.env.REACT_APP_API}/posts/${e.target.dataset.id}`
		fetch(deleteUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
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

	return (
		<EditPostsContainer>
			<ul>
				{values.posts.map((post, i) => (
					<li key={i}>
						<Row>
							<PSmall>Post name: {post.title}</PSmall>
							<button data-id={post._id} onClick={handleDelete}>
								Delete
							</button>
							<Link to={`/edit-posts/${post.slug}`}>Edit Post</Link>
						</Row>
					</li>
				))}
			</ul>
		</EditPostsContainer>
	)
}

export default EditPosts
