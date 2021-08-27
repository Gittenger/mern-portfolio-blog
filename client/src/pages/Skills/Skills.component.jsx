import React, { useState, useEffect, useContext } from 'react'

import CIndex from '../../components/components.index'
import {
	SkillsPageContentContainer,
	SkillCardsContainer,
} from './Skills.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

const Skills = () => {
	const { SkillCard } = CIndex
	const [values, setValues] = useState({
		data: [{ name: '', desc: '', bullet: [], img: '', years: '' }],
		timeStamp: '',
	})
	const [shouldFetchNewApi, setShouldFetchNewApi] = useState(false)
	const { urls, setUrlsContext } = useContext(UrlsContext)

	const url = `${process.env.REACT_APP_API}/skills`
	const checkServerUrl = `${process.env.REACT_APP_API}/checkForUpdate`

	useEffect(() => {
		fetch(checkServerUrl, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => {
				if (JSON.parse(localStorage.getItem(url))) {
					if (JSON.parse(localStorage.getItem(url)).timeStamp < res.lastUpdated) {
						setShouldFetchNewApi(true)
					}
				}
				if (urls[url]) {
					if (urls[url].timeStamp && urls[url].timeStamp < res.lastUpdated) {
						setShouldFetchNewApi(true)
					}
				}
			})
	}, [])

	useEffect(() => {
		if (localStorage.getItem(url) && shouldFetchNewApi == false) {
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
				.then(res => res.json())
				.then(res => {
					const dataObj = { timeStamp: new Date(), data: res.skills }
					localStorage.setItem(url, JSON.stringify(dataObj))
					setUrlsContext(url, dataObj)
					setValues(dataObj)
				})
				.catch(err => console.error(err))
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
					{values.data.map(({ ...props }, i) => (
						<li key={i}>
							<SkillCard {...props} />
						</li>
					))}
				</ul>
			</SkillCardsContainer>
		</SkillsPageContentContainer>
	)
}

export default Skills
