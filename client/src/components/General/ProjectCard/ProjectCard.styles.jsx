import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cssIndex, device } from '../../../styles/css/utils.styles.js'
const { desktop, laptopM, laptopS, tabletLand, tabletMM } = device

export const CardContainer = styled.div`
	--cardWidth: 650px;
	--cardHeight: 800px;

	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 60%;
	justify-content: center;
	background: ${({ bgColor }) =>
		bgColor == 'blue'
			? 'powderblue'
			: bgColor == 'green'
			? 'mediumseagreen'
			: 'orange'};
	width: var(--cardWidth);
	height: var(--cardHeight);

	${desktop} {
		--cardWidth: 600px;
		--cardHeight: 730px;
	}

	${laptopM} {
		--cardWidth: 500px;
		--cardHeight: 650px;
	}

	${laptopS} {
		--cardWidth: 420px;
		--cardHeight: 550px;
	}

	${tabletLand} {
		--cardWidth: 730px;
		--cardHeight: 550px;
	}

	${tabletMM} {
		--cardWidth: 100%;
		--cardHeight: 490px;
	}

	& > div.text-box {
		${cssIndex.flexCenterCol}
		width: 100%;
	}

	& > .img-box {
		${cssIndex.flexCenterCol}
		width: 100%;
		img {
			object-fit: contain;
			width: 90%;
			max-height: 90%;
		}
	}
`

export const Overlay = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
	${cssIndex.flexCenterCol}
	background: rgba(144, 150, 150, 0%);
	width: var(--cardWidth);
	height: var(--cardHeight);
	cursor: pointer;
	transition: all 0.3s;

	${tabletMM} {
		width: 100%;
		height: 100%;
	}

	a {
		opacity: 0;
	}

	&.active {
		background: rgba(144, 150, 150, 70%);

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
