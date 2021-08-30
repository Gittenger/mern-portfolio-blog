import React from 'react'

import { SkillCardContainer } from './SkillCard.styles'

import CIndex from '../../components.index.js'

const SkillCard = ({ name, desc, bullet, img }) => {
	const { SkillImage } = CIndex
	return (
		<SkillCardContainer>
			<div className="title-box">
				<SkillImage img={img} className="logo-img" />
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
