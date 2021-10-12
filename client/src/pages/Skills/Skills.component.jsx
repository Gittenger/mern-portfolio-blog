import React from 'react'
import { useApiData } from '../../utils/hooks.js'

import CIndex from '../../components/components.index'
import {
	SkillsPageContentContainer,
	SkillCardsContainer,
} from './Skills.styles'

const Skills = () => {
	const { SkillCard, Spinner } = CIndex

	const url = `${process.env.REACT_APP_API}/skills`
	const [apiData, dataProcessed] = useApiData(url)

	const { data } = apiData

	return (
		<SkillsPageContentContainer>
			{/* Have a setup section to explain my development environment */}
			<div className="page-title">
				<h1>Skills</h1>
			</div>
			<SkillCardsContainer>
				<ul>
					{dataProcessed ? (
						Object.keys(data).map((skill, i) => (
							<li key={i}>
								<SkillCard {...data[skill]} />
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
