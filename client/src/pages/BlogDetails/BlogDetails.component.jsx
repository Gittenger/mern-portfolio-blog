import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import PostsContext from '../../contexts/PostsContext.js'

import { BlogPostContainer } from './BlogDetails.styles'

const BlogDetails = () => {
	const [data, setData] = useState({ content: '', title: '', id: '' })
	const { slug } = useParams()
	const { urls, setUrlCache } = useContext(PostsContext)
	const url = `${process.env.REACT_APP_API}/posts/${slug}`

	useEffect(() => {
		// Try localStorage first
		if (localStorage.getItem(url)) {
			setData({ ...JSON.parse(localStorage.getItem(url)) })
			setUrlCache(url, JSON.parse(localStorage.getItem(url)))
		} else if (urls[url]) {
			// then try PostsContext
			setData({ ...urls[url] })
		} else {
			// otherwise fetch from api, then set context and localStorage
			fetch(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setUrlCache(url, res.data)
					localStorage.setItem(url, JSON.stringify(res.data))
					if (urls[url]) {
						setData({ ...urls[url] })
					}
				})
				.catch((err) => console.error(err))
		}
	}, [urls[url], localStorage.getItem(url)])

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

	const { content, title, id } = data

	return (
		<BlogPostContainer>
			<h1>Post id: {id}</h1>
			<h2>Title from parent: {title}</h2>
			<ReactMarkdown components={renderers} children={content} />
		</BlogPostContainer>
	)
}

export default BlogDetails
