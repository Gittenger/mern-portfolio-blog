import React from 'react'

import CIndex from '../../components.index.js'
import { SkillIconBoxContainer } from './SkillIconBox.styles'

const SkillIconBox = ({ name, img, skillClassName, className }) => {
	const {
		TComp: { PSmall },
		SkillImage,
	} = CIndex

	return (
		<SkillIconBoxContainer className={className}>
			<PSmall>{name}</PSmall>
			<SkillImage img={img} className={skillClassName} />
		</SkillIconBoxContainer>
	)
}

export default SkillIconBox
