import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletMM } = device

export const BackgroundContainer = styled.div`
	position: relative;
	top: 0;
	width: 100%;
	overflow-x: hidden;

	& > .toggle-nav-button {
		position: fixed;
		z-index: 500;
		bottom: 4rem;
		right: 1.2rem;
	}
`

export const ContentContainer = styled.div`
	width: 100%;
	min-height: 95vh;
	margin-right: 0;
	${cssIndex.flexCenter}
	flex-direction: column;
	background: none;
	padding-bottom: 15rem;
	margin-top: var(--titleHeight);

	${tabletMM} {
		min-height: 99vh;
	}
`
