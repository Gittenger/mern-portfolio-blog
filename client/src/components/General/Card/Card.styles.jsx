import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cssIndex } from '../../../styles/css/utils.styles.js'

export const CardContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 60%;
	justify-content: center;
	background: orange;
	width: 650px;
	height: 800px;
`

export const Overlay = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
	${cssIndex.flexCenterCol}
	background: rgba(255, 0, 0, 0%);
	width: 650px;
	height: 800px;
	cursor: pointer;
	transition: all 0.3s;

	a {
		opacity: 0;
	}

	&.active {
		background: rgba(255, 0, 0, 50%);

		a {
			opacity: 100%;
		}
	}

	a:link,
	a:visited {
		background: black;
		color: white;
		transition: all 0.3s;
		padding: 10px;
		border-radius: 10px;

		&:hover {
			background: white;
			color: black;
		}
	}
`

export const TextContainer = styled.div`
	${cssIndex.flexCenterCol}
	width: 100%;
`

export const ImgContainer = styled.div`
	${cssIndex.flexCenterCol}
	width: 100%;
	img {
		object-fit: fill;
		width: 90%;
		max-height: 90%;
	}
`
