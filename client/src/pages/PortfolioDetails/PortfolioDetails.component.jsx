import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import ProjectsContext from '../../contexts/ProjectsContext.js'

import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

const PortfolioDetails = () => {
	const [fields, setFields] = useState({
		name: '',
		descriptionLong: '',
		link: '',
		techStack: [],
	})
	const { projectName } = useParams()
	const { urls, setUrlCache } = useContext(ProjectsContext)
	const url = `${process.env.REACT_APP_API}/projects/${projectName}`

	useEffect(() => {
		if (localStorage.getItem(url)) {
			setFields({ ...JSON.parse(localStorage.getItem(url)) })
			setUrlCache(url, JSON.parse(localStorage.getItem(url)))
		} else if (urls[url]) {
			setFields({ ...urls[url] })
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
					setUrlCache(url, res.data)
					localStorage.setItem(url, JSON.stringify(res.data))
					setFields({ ...res.data })
				})
				.catch((err) => console.error(err))
		}
	}, [urls[url], localStorage.getItem(url)])

	const { name, descriptionLong, link, techStack } = fields

	return (
		<PortfolioDetailsContainer>
			<p>{name}</p>
			<p>{descriptionLong}</p>
			<a href={link}>Link to project</a>
			<ul>
				{techStack.map((el) => (
					<li>{el}</li>
				))}
			</ul>
		</PortfolioDetailsContainer>
	)
}

export default PortfolioDetails
