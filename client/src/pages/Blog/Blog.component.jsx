import React, { useState, useEffect, useContext } from 'react'
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
	const [shouldFetchNewApi, setShouldFetchNewApi] = useState(false)

	const { urls, setUrlsContext } = useContext(UrlsContext)

	const url = `${process.env.REACT_APP_API}/posts`
	const checkServerUrl = `${process.env.REACT_APP_API}/checkForUpdate`

	useEffect(() => {
		fetch(checkServerUrl, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				const cachedItem = JSON.parse(localStorage.getItem(url))

				if (cachedItem && cachedItem.timeStamp < res.lastUpdated) {
					setShouldFetchNewApi(true)
				} else if (
					urls[url] &&
					urls[url].timestamp &&
					urls[url].timestamp < res.lastUpdated
				) {
					setShouldFetchNewApi(true)
				} else if (cachedItem && !cachedItem.timeStamp) {
					setShouldFetchNewApi(true)
				} else if (urls[url] && !urls[url].timeStamp) {
					setShouldFetchNewApi(true)
				} else setShouldFetchNewApi(false)
			})
	}, [])

	useEffect(() => {
		const cachedItem = JSON.parse(localStorage.getItem(url))

		if (cachedItem && shouldFetchNewApi === false) {
			console.log('from local')
			setValues(cachedItem)
			setUrlsContext(url, cachedItem)
		} else if (urls[url] && shouldFetchNewApi === false) {
			console.log('from context')
			setValues(urls[url])
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
					setValues(dataObject)
				})
				.catch((err) => console.error(err))
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
