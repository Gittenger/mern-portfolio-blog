import React, { useState, useEffect, useContext } from 'react'

import CIndex from '../../components/components.index'
import {
	SkillsPageContentContainer,
	SkillCardsContainer,
} from './Skills.styles'

import SkillsContext from '../../contexts/SkillsContext.js'

const Skills = () => {
	const { SkillCard } = CIndex
	const [values, setValues] = useState([
		{ name: '', desc: '', bullet: [], img: '', years: '' },
	])
	const { skillsUrls, setSkillsContext } = useContext(SkillsContext)

	const url = `${process.env.REACT_APP_API}/skills`

	useEffect(() => {
		if (localStorage.getItem(url)) {
			console.log('getting from local')
			setValues(JSON.parse(localStorage.getItem(url)))
			setSkillsContext(
				url,
				localStorage.getItem(JSON.parse(localStorage.getItem(url)))
			)
		} else if (skillsUrls[url]) {
			console.log('getting from context')
			setValues(skillsUrls[url])
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
					localStorage.setItem(url, JSON.stringify(res.skills))
					setSkillsContext(url, res.skills)
					setValues(res.skills)
				})
				.catch(err => console.error(err))
		}
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
