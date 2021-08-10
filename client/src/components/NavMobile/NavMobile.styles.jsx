import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletS, mobileMM } = device

export const NavContainer = styled.div`
	position: fixed;
	background: var(--black);
	bottom: 0;
	left: 0;
	z-index: 300;
	width: 100%;
	${cssIndex.flexCenter};
	transition: transform 0.3s;

	& .nav-list {
		flex-direction: row;
		width: 99%;
		padding: 2.6rem 0;
		font-size: 1rem;

		& > li:not(:last-child) {
			margin-bottom: 0;
			margin-right: 1.6rem;
		}
	}

	&.show {
		transform: translateY(0);
	}

	&.hide {
		transform: translateY(20rem);
	}

	${tabletS} {
		background: ${({ theme: { gradient } }) => gradient.navGradient};
		width: 100vw;

		& .nav-list {
			flex-direction: column;
			letter-spacing: 0.35em;
			font-size: 1.5rem;
			padding: 3rem 0;

			& > li:not(:last-child) {
				margin: 0;
				margin-bottom: var(--m-SM);
			}
		}

		&.show {
			transform: translateY(0);
		}

		&.hide {
			transform: translateY(70rem);
		}
	}

	${mobileMM} {
		& .nav-list {
			padding: 3.5rem 0;
		}
	}
`
