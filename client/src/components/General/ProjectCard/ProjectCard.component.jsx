import React, { useState } from 'react'

import { CardContainer, Overlay } from './ProjectCard.styles'

const ProjectCard = ({ title, description, anchor, coverImg, bgColor }) => {
	const [hoverState, setHoverState] = useState(false)

	const handleMouseEnter = () => {
		setHoverState(true)
	}

	const handleMouseLeave = () => {
		setHoverState(false)
	}

	return (
		<CardContainer
			bgColor={bgColor}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Overlay to={anchor} className={hoverState ? 'active' : ''}>
				<button>See Details</button>
			</Overlay>
			<div className="text-box">
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className="img-box">
				<img src={coverImg} alt="" />
			</div>
		</CardContainer>
	)
}

export default ProjectCard
