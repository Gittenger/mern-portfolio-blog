import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BlogPageContentContainer } from './BlogPageContent.styles'

const BlogPageContent = () => {
	const [values, setValues] = useState({ posts: [] })

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API}/posts`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				setValues({ ...values, posts: res.data })
			})
	}, [])

	return (
		<BlogPageContentContainer>
			{values.posts.map((post) => (
				<Link to={`/blog/posts/${post.slug}`}>{post.title}</Link>
			))}
		</BlogPageContentContainer>
	)
}

export default BlogPageContent
