import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { BlogPostContainer } from './BlogPost.styles'

const BlogPost = () => {
	const [data, setData] = useState({ message: '' })
	const postId = '61137ad078aaffb924383726'
	const { id } = useParams()
	const {
		state: { title },
	} = useLocation()

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API}/posts/${postId}`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
				setData({ message: res.data.content })
			})
			.catch((err) => console.error(err))
	}, [])

	const renderers = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '')
			return !inline && match ? (
				<Prism
					style={dracula}
					language={match[1]}
					PreTag="div"
					children={String(children).replace(/\n$/, '')}
					{...props}
				/>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			)
		},
	}

	return (
		<BlogPostContainer>
			<h1>Post: {id}</h1>
			<h2>Title from parent: {title}</h2>
			<ReactMarkdown components={renderers} children={data.message} />
		</BlogPostContainer>
	)
}

export default BlogPost
