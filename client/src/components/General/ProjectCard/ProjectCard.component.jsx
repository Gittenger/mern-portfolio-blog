import React, { useState } from 'react'

import CIndex from '../../components.index'

import { CardContainer, Overlay } from './ProjectCard.styles'
import Images from '../../../assets/img/img-index.js'

const ProjectCard = ({ title, description, anchor, coverImg }) => {
	const [hoverState, setHoverState] = useState(false)

	const handleMouseEnter = () => {
		setHoverState(true)
	}

	const handleMouseLeave = () => {
		setHoverState(false)
	}

	const { projects } = Images
	const {
		TComp: { H1, PSmall },
	} = CIndex

	return (
		<CardContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Overlay to={anchor} className={hoverState ? 'active' : ''}>
				<button>See Details</button>
			</Overlay>
			<div className="text-box">
				<H1>{title}</H1>
				<PSmall>{description}</PSmall>
			</div>
			<div className="img-box">
				<img
					src={coverImg === 'fantastic-flames' ? projects.ff : projects.default}
					alt=""
				/>
			</div>
		</CardContainer>
	)
}

export default ProjectCard
