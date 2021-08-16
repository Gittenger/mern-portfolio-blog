import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
	CardContainer,
	TextContainer,
	ImgContainer,
	Overlay,
} from './Card.styles'
import DesignOne from '../../../assets/img/design-1.png'
import DesignTwo from '../../../assets/img/design-2.png'
import DesignThree from '../../../assets/img/design-3.png'

const Card = () => {
	const [hoverState, setHoverState] = useState(false)

	const handleMouseEnter = () => {
		setHoverState(true)
	}

	const handleMouseLeave = () => {
		setHoverState(false)
	}

	return (
		<CardContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Overlay className={hoverState ? 'active' : ''}>
				<Link to="/">See Details</Link>
			</Overlay>
			<TextContainer>
				<h1>Card Title</h1>
				<p>Card Description</p>
			</TextContainer>
			<ImgContainer>
				<img src={DesignOne} alt="" />
			</ImgContainer>
		</CardContainer>
	)
}

export default Card
