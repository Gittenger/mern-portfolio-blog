import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CIndex from '../../components/components.index.js'
import { PortfolioPageContainer, PortfolioCardList } from './Portfolio.styles'

import DesignOne from '../../assets/img/design-1.png'
import DesignTwo from '../../assets/img/design-2.png'
import DesignThree from '../../assets/img/design-3.png'

const Portfolio = () => {
	const { ProjectCard } = CIndex
	const [values, setValues] = useState([])
	const url = `${process.env.REACT_APP_API}/projects`

	useEffect(() => {
		fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => {
				setValues(res.data)
			})
			.catch(err => console.error(err))
	}, [url])

	return (
		<PortfolioPageContainer>
			<Link to="/addProject">Add Project</Link>
			<PortfolioCardList>
				{values.map(({ name, description, slug }) => (
					<li>
						<ProjectCard
							title={name}
							description={description}
							anchor={`portfolio/${slug}`}
							coverImg={DesignOne}
						/>
					</li>
				))}
			</PortfolioCardList>
		</PortfolioPageContainer>
	)
}

export default Portfolio
