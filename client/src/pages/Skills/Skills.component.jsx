import React, { useState, useEffect, useContext } from 'react'

import {
	SkillsPageContentContainer,
	SkillCardsContainer,
} from './Skills.styles'
import SkillCard from '../../components/General/SkillCard/SkillCard.component'

const Skills = () => {
	const [values, setValues] = useState([
		{ name: '', desc: '', bullet: [], img: '', years: '' },
	])

	const url = `${process.env.REACT_APP_API}/skills`

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
				setValues(res.skills)
			})
			.catch((err) => console.error(err))
	}, [])

	return (
		<SkillsPageContentContainer>
			{/* Have a setup section to explain my development environment */}
			<div className="page-title">
				<h1>Skills</h1>
			</div>
			<SkillCardsContainer>
				<ul>
					{values.map(({ ...props }) => (
						<li>
							<SkillCard {...props} />
						</li>
					))}
				</ul>
			</SkillCardsContainer>
		</SkillsPageContentContainer>
	)
}

export default Skills
