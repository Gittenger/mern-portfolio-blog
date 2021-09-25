import React, { useState, useEffect, useContext } from 'react'
import { useShouldUpdateCache } from '../../utils/hooks.js'

import CIndex from '../../components/components.index'
import {
	SkillsPageContentContainer,
	SkillCardsContainer,
} from './Skills.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

const Skills = () => {
	const { SkillCard } = CIndex
	const [values, setValues] = useState({
		data: {
			key: {
				name: '',
				desc: '',
				bullet: [],
				img: '',
				years: '',
			},
		},
		timeStamp: '',
	})
	const { urls, setUrlsContext } = useContext(UrlsContext)

	const url = `${process.env.REACT_APP_API}/skills`
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
					res.data.forEach((skill) => {
						fromData[skill.slug] = skill
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
	}, [shouldFetchNewApi])

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		if (cachedItem && shouldFetchNewApi === false) {
			console.log('getting from local')
			setValues(JSON.parse(localStorage.getItem(url)))
			setUrlsContext(
				url,
				localStorage.getItem(JSON.parse(localStorage.getItem(url)))
			)
		} else if (urls[url] && shouldFetchNewApi == false) {
			console.log('getting from context')
			setValues(urls[url])
		} else {
			console.log('getting from api')
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
					res.data.forEach((skill) => {
						fromData[skill.slug] = skill
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
	}, [shouldFetchNewApi])

	return (
		<SkillsPageContentContainer>
			{/* Have a setup section to explain my development environment */}
			<div className="page-title">
				<h1>Skills</h1>
			</div>
			<SkillCardsContainer>
				<ul>
					{Object.keys(values.data).map((skill, i) => (
						<li key={i}>
							<SkillCard {...values.data[skill]} />
						</li>
					))}
				</ul>
			</SkillCardsContainer>
		</SkillsPageContentContainer>
	)
}

export default Skills
