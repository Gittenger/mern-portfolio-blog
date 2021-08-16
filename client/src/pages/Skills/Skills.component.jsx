import React, { useState } from 'react'

import NodeImg from '../../assets/img/skills/node.png'
import GitImg from '../../assets/img/skills/git.png'
import ReduxImg from '../../assets/img/skills/redux.png'
import AwsImg from '../../assets/img/skills/aws.png'
import PythonImg from '../../assets/img/skills/python.png'
import ReactSvg from '../../assets/img/skills/svg/react.svg'
import FigmaSvg from '../../assets/img/skills/svg/figma.svg'
import FirebaseSvg from '../../assets/img/skills/svg/firebase.svg'
import GraphqlSvg from '../../assets/img/skills/svg/graphql.svg'
import LinuxSvg from '../../assets/img/skills/svg/linux.svg'
import VimSvg from '../../assets/img/skills/svg/vim.svg'
import { SkillsPageContentContainer } from './Skills.styles'

const Skills = () => {
	const [showList, setShowList] = useState(false)

	const handleClick = () => {
		setShowList(!showList)
	}

	return (
		<SkillsPageContentContainer>
			{/* Make accordion of skill icons, */}
			{/* with table of contents allowing to skip to details at bottom */}
			{/* In details section, explain what I'm capable of and some things I've done */}
			{/* Have a setup section to explain my development environment */}
			<div className="accordion">
				<button onClick={handleClick}>Click</button>
				<ul className={showList ? 'active' : ''}>
					<li>
						<img src={NodeImg} />
					</li>
					<li>
						<img src={GitImg} />
					</li>
					<li>
						<img src={ReduxImg} />
					</li>
					<li>
						<img className="aws-img" src={AwsImg} />
					</li>
					<li>
						<img src={PythonImg} />
					</li>
					<li>
						<img src={ReactSvg} />
					</li>
					<li>
						<img src={FigmaSvg} />
					</li>
					<li>
						<img src={FirebaseSvg} />
					</li>
					<li>
						<img src={GraphqlSvg} />
					</li>
					<li>
						<img src={LinuxSvg} />
					</li>
					<li>
						<img src={VimSvg} />
					</li>
				</ul>
			</div>
		</SkillsPageContentContainer>
	)
}

export default Skills
