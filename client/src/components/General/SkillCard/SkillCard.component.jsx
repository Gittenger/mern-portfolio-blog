import React from 'react'

import { SkillCardContainer } from './SkillCard.styles'

import Images from '../../../assets/img/img-index.js'

const SkillCard = ({ name, desc, bullet, img }) => {
	const {
		skills: { png, svg },
	} = Images
	return (
		<SkillCardContainer>
			<div className="title-box">
				<div className="img-box">
					<img
						src={
							img === 'nodejs'
								? png.node
								: img === 'git'
								? png.git
								: img === 'redux'
								? png.redux
								: img === 'aws'
								? png.aws
								: img === 'python'
								? png.python
								: img === 'react'
								? svg.react
								: img === 'figma'
								? svg.figma
								: img === 'firebase'
								? svg.firebase
								: img === 'graphql'
								? svg.graphql
								: img === 'linux'
								? svg.linux
								: img === 'vim'
								? svg.vim
								: svg.react
						}
						alt=""
					/>
				</div>
				<h1>{name}</h1>
			</div>
			<p className="desc">{desc}</p>
			<p>Core skills:</p>
			<ul>
				{bullet.map((el, i) => (
					<li key={i}>{el}</li>
				))}
			</ul>
		</SkillCardContainer>
	)
}

export default SkillCard
