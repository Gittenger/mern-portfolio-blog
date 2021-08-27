import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import CIndex from '../../components/components.index.js'
import { BlogDetailsContainer } from './BlogDetails.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

const BlogDetails = () => {
	const {
		TComp: { PSmall, H2 },
	} = CIndex
	const [values, setValues] = useState({ content: '', title: '' })
	const { slug } = useParams()
	const { urls, setUrlsContext } = useContext(UrlsContext)
	const url = `${process.env.REACT_APP_API}/posts/${slug}`

	useEffect(() => {
		// Try localStorage first
		if (localStorage.getItem(url)) {
			setValues({ ...JSON.parse(localStorage.getItem(url)) })
			setUrlsContext(url, JSON.parse(localStorage.getItem(url)))
		} else if (urls[url]) {
			// then try PostsContext
			setValues({ ...urls[url] })
		} else {
			// otherwise fetch from api, then set context and localStorage
			fetch(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(res => {
					setUrlsContext(url, res.data)
					localStorage.setItem(url, JSON.stringify(res.data))
					setValues({ ...res.data })
				})
				.catch(err => console.error(err))
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
		p({ ...props }) {
			return <PSmall {...props} />
		},
	}

	const { content, title } = values

	return (
		<BlogDetailsContainer>
			<H2>{title}</H2>
			<ReactMarkdown components={renderers} children={content} />
		</BlogDetailsContainer>
	)
}

export default BlogDetails
