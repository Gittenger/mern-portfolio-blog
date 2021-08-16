import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

const PortfolioDetails = () => {
	const [fields, setFields] = useState({
		name: '',
		descriptionLong: '',
		link: '',
		techStack: [],
	})
	const { projectName } = useParams()
	const url = `${process.env.REACT_APP_API}/projects/${projectName}`

	useEffect(() => {
		fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				setFields({ ...res.data })
			})
	}, [])

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
