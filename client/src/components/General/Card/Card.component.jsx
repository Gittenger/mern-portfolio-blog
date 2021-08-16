import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
	CardContainer,
	TextContainer,
	ImgContainer,
	Overlay,
} from './Card.styles'

const Card = ({ title, description, anchor, coverImg, bgColor, dbKey }) => {
	const [hoverState, setHoverState] = useState(false)

	const handleMouseEnter = () => {
		setHoverState(true)
	}

	const handleMouseLeave = () => {
		setHoverState(false)
	}

	const locationObj = {
		pathname: anchor,
		state: {
			dbKey,
		},
	}

	return (
		<CardContainer
			bgColor={bgColor}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Overlay to={locationObj} className={hoverState ? 'active' : ''}>
				<Link to={locationObj}>See Details</Link>
			</Overlay>
			<TextContainer>
				<h1>{title}</h1>
				<p>{description}</p>
			</TextContainer>
			<ImgContainer>
				<img src={coverImg} alt="" />
			</ImgContainer>
		</CardContainer>
	)
}

export default Card
