import React, { useState, useEffect, useContext } from 'react'
import { useShouldUpdateCache } from '../../utils/hooks.js'
import { Link } from 'react-router-dom'

import { BlogPageContentContainer } from './Blog.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

const Blog = () => {
	const [values, setValues] = useState({
		data: {
			key: {
				slug: '',
				title: '',
			},
		},
		timeStamp: '',
	})
	const { urls, setUrlsContext } = useContext(UrlsContext)

	const url = `${process.env.REACT_APP_API}/posts`
	const shouldFetchNewApi = useShouldUpdateCache(url)

	const cachedItem = JSON.parse(localStorage.getItem(url))

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		if (cachedItem && shouldFetchNewApi === false) {
			console.log('from local')
			if (!unmounted) {
				setValues(cachedItem)
			}
			setUrlsContext(url, cachedItem)
		} else if (urls[url] && shouldFetchNewApi === false) {
			console.log('from context')
			if (!unmounted) {
				setValues(urls[url])
			}
		} else {
			console.log('from api')
			fetch(url, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					const fromData = {}
					res.data.forEach((post) => {
						fromData[post.slug] = post
					})
					const dataObject = { timeStamp: new Date(), data: fromData }
					localStorage.setItem(url, JSON.stringify(dataObject))
					setUrlsContext(url, dataObject)
					if (!unmounted) {
						setValues(dataObject)
					}
				})
				.catch((err) => console.error(err))
		}

		return () => {
			unmounted = true
		}
	}, [])

	return (
		<BlogPageContentContainer>
			{Object.keys(values.data).map((post, i) => (
				<Link key={i} to={`/blog/posts/${values.data[post].slug}`}>
					{values.data[post].title}
				</Link>
			))}
		</BlogPageContentContainer>
	)
}

export default Blog
