import React, { useEffect, useState, useContext } from 'react'
import { useShouldUpdateCache } from '../../utils/hooks.js'
import { useParams } from 'react-router-dom'

import CIndex from '../../components/components.index.js'
import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

const PortfolioDetails = () => {
	const [values, setValues] = useState({
		name: '',
		descriptionLong: '',
		link: '',
		techStack: [],
	})
	const { slug } = useParams()
	const { urls, setUrlsContext } = useContext(UrlsContext)

	const projectsUrl = `${process.env.REACT_APP_API}/projects`
	const projectUrl = `${process.env.REACT_APP_API}/projects/${slug}`
	const shouldFetchNewApi = useShouldUpdateCache(projectUrl)

	const cachedItem = JSON.parse(localStorage.getItem(projectsUrl)).data[slug]

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		if (cachedItem && shouldFetchNewApi === false) {
			console.log('from local')
			if (!unmounted) {
				setValues(cachedItem)
			}
			setUrlsContext(projectUrl, cachedItem)
		} else if (urls[projectUrl] && shouldFetchNewApi === false) {
			console.log('from context')
			setValues({ ...urls[projectUrl] })
		} else {
			console.log('from api')
			fetch(projectUrl, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setUrlsContext(projectUrl, res.data)
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

	const { name, descriptionLong, link, techStack } = values

	const {
		TComp: { PSmall },
		SkillImage,
	} = CIndex

	return (
		<PortfolioDetailsContainer>
			<PSmall>{name}</PSmall>
			<PSmall>{descriptionLong}</PSmall>
			<a href={link}>Link to project</a>
			<ul>
				{techStack.map((el, i) => {
					const elLow = el.toLowerCase()
					return (
						<li key={i}>
							<SkillImage key={i} img={elLow} className="skill-img" />
						</li>
					)
				})}
			</ul>
		</PortfolioDetailsContainer>
	)
}

export default PortfolioDetails
