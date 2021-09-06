import React, { useEffect, useState, useContext } from 'react'
import { useShouldUpdateCache } from '../../utils/hooks.js'
import { Link } from 'react-router-dom'

import CIndex from '../../components/components.index.js'
import { PortfolioPageContainer, PortfolioCardList } from './Portfolio.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

const Portfolio = () => {
	const { ProjectCard } = CIndex
	const [values, setValues] = useState({
		data: {
			key: {
				name: '',
				description: '',
				slug: '',
			},
		},
		timeStamp: '',
	})
	const { urls, setUrlsContext } = useContext(UrlsContext)

	const url = `${process.env.REACT_APP_API}/projects`
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
					res.data.forEach((project) => {
						fromData[project.slug] = project
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
	}, [url])

	return (
		<PortfolioPageContainer>
			<Link to="/addProject">Add Project</Link>
			<PortfolioCardList>
				{Object.keys(values.data).map((project, i) => (
					<li key={i}>
						<ProjectCard
							title={values.data[project].name}
							description={values.data[project].description}
							anchor={`portfolio/${values.data[project].slug}`}
							coverImg={values.data[project].slug}
						/>
					</li>
				))}
			</PortfolioCardList>
		</PortfolioPageContainer>
	)
}

export default Portfolio
