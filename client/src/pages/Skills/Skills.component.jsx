import React, { useEffect, useState } from 'react'
import { useApiData } from '../../utils/hooks.js'

import CIndex from '../../components/components.index'
import {
	SkillsPageContentContainer,
	SkillCardsContainer,
} from './Skills.styles'

const Skills = () => {
	const { SkillCard, Spinner } = CIndex
	const [sortedData, setSortedData] = useState([])

	const url = `${process.env.REACT_APP_API}/skills`
	const [apiData, dataProcessed] = useApiData(url)

	const { data } = apiData
	useEffect(() => {
		const order = [
			'reactjs',
			'mongodb',
			'mongoose',
			'css3',
			'nodejs',
			'html5',
			'sass',
			'graphql',
			'git',
			'aws',
			'redux',
			'firebase',
			'linux',
			'pug',
			'figma',
			'python',
			'gatsby',
			'nextjs',
			'vim',
		]
		const dataKeys = Object.keys(data)

		const itemPositions = {}
		for (const [index, name] of order.entries()) {
			itemPositions[name] = index
		}

		const sorted = dataKeys
			.sort((a, b) => itemPositions[a] - itemPositions[b])
			.map(name => {
				return { ...data[name] }
			})

		setSortedData(sorted)
	}, [data])

	return (
		<SkillsPageContentContainer>
			{/* Have a setup section to explain my development environment */}
			<div className="page-title">
				<h1>Skills</h1>
			</div>
			<SkillCardsContainer>
				<ul>
					{dataProcessed ? (
						sortedData.map((skill, i) => (
							<li key={i}>
								<SkillCard {...skill} />
							</li>
						))
					) : (
						<Spinner />
					)}
				</ul>
			</SkillCardsContainer>
		</SkillsPageContentContainer>
	)
}

export default Skills
