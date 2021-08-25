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
			<div className="page-title">
				<h1>Skills</h1>
			</div>
			<SkillCardsContainer>
				<ul>
					<li>
						<SkillCard
							name="NodeJS"
							desc="I am very experienced at building web applications on the Node runtime. I am extremely familiar with all the basics of its ins and outs and can quickly set up and configure new applications to be powered with a NodeJS back-end."
							bullet={[
								'Using NPM to find and manage all necessary tools and plugins',
								'Building robust back-ends using tools and libraries such as Express or Adonis',
								"Creating API's to run server side to be consumed by client",
								'Scripting production commands to run application on production server such as inside a cloud-based VPS or container',
								'Custom Node scripts to be executed at the command line for managing read/write operations on file system',
							]}
							img="nodejs"
						/>
					</li>
					<li>
						<SkillCard
							name="Git"
							desc="I am highly competent at using git to manage projects. I use it on every personal project and have gotten better over the years at using it efficiently."
							bullet={[
								'All basics -- branching, pulling, pushing, merging, sending pull requests, comparing with diff',
								'I use it daily and utilize shell aliases to issue almost all git commands with only a few keystrokes',
								'Small commits for better traceability',
							]}
							img="git"
						/>
					</li>
				</ul>
			</SkillCardsContainer>
		</SkillsPageContentContainer>
	)
}

export default Skills
