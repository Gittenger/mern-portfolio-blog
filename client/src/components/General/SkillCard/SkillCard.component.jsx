import React from 'react'

import NodeImg from '../../../assets/img/skills/node.png'
import GitImg from '../../../assets/img/skills/git.png'
import ReduxImg from '../../../assets/img/skills/redux.png'
import AwsImg from '../../../assets/img/skills/aws.png'
import PythonImg from '../../../assets/img/skills/python.png'
import ReactSvg from '../../../assets/img/skills/svg/react.svg'
import FigmaSvg from '../../../assets/img/skills/svg/figma.svg'
import FirebaseSvg from '../../../assets/img/skills/svg/firebase.svg'
import GraphqlSvg from '../../../assets/img/skills/svg/graphql.svg'
import LinuxSvg from '../../../assets/img/skills/svg/linux.svg'
import VimSvg from '../../../assets/img/skills/svg/vim.svg'

import { SkillCardContainer } from './SkillCard.styles'

const SkillCard = ({ name, desc, bullet, img, years }) => {
	return (
		<SkillCardContainer>
			<div className="title-box">
				<div className="img-box">
					<img
						src={
							img === 'nodejs'
								? NodeImg
								: img === 'git'
								? GitImg
								: img === 'redux'
								? ReduxImg
								: img === 'aws'
								? AwsImg
								: img === 'python'
								? PythonImg
								: img === 'react'
								? ReactSvg
								: img === 'figma'
								? FigmaSvg
								: img === 'firebase'
								? FirebaseSvg
								: img === 'graphql'
								? GraphqlSvg
								: img === 'linux'
								? LinuxSvg
								: img === 'vim'
								? VimSvg
								: ReactSvg
						}
						alt=""
					/>
				</div>
				<h1>{name}</h1>
			</div>
			<p className="desc">{desc}</p>
			<p>Core skills:</p>
			<ul>
				{bullet.map((el) => (
					<li>{el}</li>
				))}
			</ul>
		</SkillCardContainer>
	)
}

export default SkillCard
