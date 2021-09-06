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
	grid-template-rows: 1fr 78%;
	justify-content: center;
	padding-bottom: 2rem;
	background: var(--blackDark);
	width: var(--cardWidth);
	height: var(--cardHeight);
	border-radius: 10px;

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

		h1 {
			--scale: 0.85;
		}

		p {
			--scale: 0.5;
		}
	}

	& > .img-box {
		${cssIndex.flexCenterCol}
		width: 100%;
		img {
			object-fit: contain;
			max-width: 90%;
			max-height: 100%;
			border-radius: 7px;
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
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.3s;

	${tabletMM} {
		width: 100%;
		height: 100%;
	}

	button {
		opacity: 0;
		cursor: pointer;
		background: black;
		color: white;
		transition: all 0.3s;
		padding: 10px;
		border-radius: 10px;
		border-style: none;

		transition: all 0.3s;

		&:hover {
			background: white;
			color: black;
		}
	}

	&.active {
		background: rgba(144, 150, 150, 70%);

		button {
			opacity: 100%;
		}
	}
`
