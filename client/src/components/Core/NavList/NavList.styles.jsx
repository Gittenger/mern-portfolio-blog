import styled from 'styled-components'

import { cssIndex, device } from '../../../styles/css/utils.styles.js'

import { navStyles } from '../../typography/typography.components.js'

const { tabletS, tabletMM, mobileMM } = device

export const NavListContainer = styled.ul`
	${navStyles}
	${cssIndex.flexCenter}
	height: 100%;

	li {
		${cssIndex.flexCenter}
		height: 100%;

		.nav-link-box {
			${cssIndex.flexCenter}
			position: relative;
			z-index: 0;
			height: 100%;

			// link with hover
			a {
				position: relative;
				z-index: 10;
				${cssIndex.flexCenter}
				padding: 0 1rem;
				// transition: all 0.3s;

				&:link,
				&:visited {
					color: var(--white);
				}

				&:hover + .nav-highlight {
					opacity: 100%;
				}

				// active-page effect
				&.active-page {
					filter: invert(35%);
				}
			}

			// box under link for effect
			& > .nav-highlight {
				position: absolute;
				z-index: 0;
				opacity: 0;
				background: var(--main);
				top: 0;
				left: -2px;
				height: 100%;
				width: 100%;
				transform: skew(-3deg);
				transition: all 0.3s;

				&-1 {
					filter: brightness(0.9);
				}
				&-2 {
					filter: brightness(0.75);
				}
				&-3 {
					filter: brightness(0.6);
				}
				&-4 {
					filter: brightness(0.5);
				}
				&-5 {
					filter: brightness(0.38);
				}
				&-6 {
					filter: brightness(0.3);
				}
				&-7 {
					filter: brightness(0.2);
				}
			}
		}
	}

	// mid-size
	${tabletMM} {
		width: 99%;
		height: 100%;
		font-size: 1.2rem;

		& > li:not(:last-child) {
			margin-bottom: 0;
			margin-right: 1.6rem;
		}
	}

	// small
	${tabletS} {
		flex-direction: column;
		letter-spacing: 0.35em;
		font-size: 1.5rem;
		width: 45%;
		padding: 3rem 0;

		& > li:not(:last-child) {
			margin: 0;
		}

		li {
			margin-right: 0;
			width: 100%;

			.nav-link-box {
				width: 100%;
				height: 100%;
				padding: 2rem 0;

				a {
					&.active-page {
						filter: none;
					}
				}

				& > .nav-highlight {
				}
			}
		}
	}

	${mobileMM} {
		padding: 3.5rem 0;
	}
`
