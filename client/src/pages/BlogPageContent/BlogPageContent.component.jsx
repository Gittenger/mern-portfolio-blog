import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { BlogPageContentContainer } from './BlogPageContent.styles'

const BlogPageContent = () => {
	const [data, setData] = useState({ message: '' })
	const postId = '602b83f68995a1ff2ac71fcd'

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
		<BlogPageContentContainer>
			<ReactMarkdown components={renderers} children={data.message} />
		</BlogPageContentContainer>
	)
}

export default BlogPageContent
