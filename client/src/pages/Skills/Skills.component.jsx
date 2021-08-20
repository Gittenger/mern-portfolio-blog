import React, { useState } from 'react'

import {
	SkillsPageContentContainer,
	SkillCardsContainer,
} from './Skills.styles'
import SkillCard from '../../components/General/SkillCard/SkillCard.component'

const Skills = () => {
	return (
		<SkillsPageContentContainer>
			{/* Have a setup section to explain my development environment */}
			<SkillCardsContainer>
				<ul>
					<li>
						<SkillCard
							name="NodeJS"
							desc="I am a competent nodeJS developer"
							bullet={[
								'NPM',
								'Building robust back-ends using tools such as Express',
							]}
							competency="High"
							img="nodejs"
						/>
					</li>
					<li>
						<SkillCard
							name="Git"
							desc="I am competent at using Git"
							bullet={['Git version control', 'Use it daily']}
							competency="High"
							img="git"
						/>
					</li>
				</ul>
			</SkillCardsContainer>
		</SkillsPageContentContainer>
	)
}

export default Skills
