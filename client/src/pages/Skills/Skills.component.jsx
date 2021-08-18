import React, { useState } from 'react'

import { SkillsPageContentContainer } from './Skills.styles'
import SkillCard from '../../components/General/SkillCard/SkillCard.component'

const Skills = () => {
	const [showList, setShowList] = useState(false)

	const handleClick = () => {
		setShowList(!showList)
	}

	return (
		<SkillsPageContentContainer>
			{/* Have a setup section to explain my development environment */}
			<div className="accordion">
				<button onClick={handleClick}>Click</button>
				<ul className={showList ? 'active' : ''}>
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
			</div>
		</SkillsPageContentContainer>
	)
}

export default Skills
