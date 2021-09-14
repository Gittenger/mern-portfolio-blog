import styled from 'styled-components'

import { cssIndex, device } from '../../../styles/css/utils.styles.js'

const { tabletMM } = device

export const NavDeskContainer = styled.nav`
	--skewNav: skewY(-0.5deg) translateY(-8.5px);
	--inverseSkewNav: skewY(0.5deg) translateY(-4px);

	width: 100%;
	${cssIndex.flexCenter}
	height: var(--navHeight);
	background: ${({ theme: { colorsRGB } }) => `rgba(${colorsRGB.black}, .98)`};
	position: fixed;
	top: 0;
	z-index: 100;
	transform: var(--skewNav);

	${tabletMM} {
		display: none;
	}
`
