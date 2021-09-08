import styled from 'styled-components'

import { cssIndex, device } from '../../../styles/css/utils.styles.js'

const { tabletS, tabletMM } = device

export const NavMobileContainer = styled.nav`
	position: fixed;
	background: var(--blackDark);
	bottom: 0;
	left: 0;
	z-index: 300;
	width: 100%;
	${cssIndex.flexCenter};
	transition: transform 0.3s;

	&.show {
		transform: translateY(0);
	}

	&.hide {
		transform: translateY(20rem);
	}

	${tabletMM} {
		height: 6rem;
	}

	${tabletS} {
		width: 100vw;
		height: unset;

		&.show {
			transform: translateY(0);
		}

		&.hide {
			transform: translateY(70rem);
		}
	}
`
