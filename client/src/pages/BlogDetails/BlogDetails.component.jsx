import React, { useState, useEffect, useContext } from 'react'
import { useShouldUpdateCache } from '../../utils/hooks.js'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import CIndex from '../../components/components.index.js'
import { BlogDetailsContainer } from './BlogDetails.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

const BlogDetails = () => {
	const [values, setValues] = useState({ content: '', title: '' })
	const { slug } = useParams()
	const { urls, setUrlsContext } = useContext(UrlsContext)

	const postsUrl = `${process.env.REACT_APP_API}/posts`
	const postUrl = `${process.env.REACT_APP_API}/posts/${slug}`
	const shouldFetchNewApi = useShouldUpdateCache(postUrl)

	const cachedItem = JSON.parse(localStorage.getItem(postsUrl)).data[slug]

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		// Try localStorage first
		if (cachedItem && shouldFetchNewApi === false) {
			console.log('from local')
			if (!unmounted) {
				setValues(cachedItem)
			}
			setUrlsContext(postUrl, cachedItem)
		} else if (urls[postUrl] && shouldFetchNewApi === false) {
			// then try PostsContext
			console.log('from context')
			if (!unmounted) {
				setValues({ ...urls[postUrl] })
			}
		} else {
			// otherwise fetch from api, then set context
			console.log('from api')
			fetch(postUrl, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setUrlsContext(postUrl, res.data)
					if (!unmounted) {
						setValues({ ...res.data })
					}
				})
				.catch((err) => console.error(err))
		}

		return () => {
			unmounted = true
		}
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
		p({ ...props }) {
			return <PSmall {...props} />
		},
	}

	const { content, title } = values

	const {
		TComp: { PSmall, H2 },
	} = CIndex

	return (
		<BlogDetailsContainer>
			<H2>{title}</H2>
			<ReactMarkdown components={renderers} children={content} />
		</BlogDetailsContainer>
	)
}

export default BlogDetails
