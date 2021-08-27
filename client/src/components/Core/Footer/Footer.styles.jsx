import styled from 'styled-components'

import { cssIndex } from '../../../styles/css/utils.styles.js'

import { device } from '../../../styles/css/utils.styles.js'

const { mobileMM, mobileXS } = device

export const FooterContainer = styled.footer`
	${cssIndex.flexCenter}
	position: absolute;
	bottom: 0;
	font-family: var(--fontMain);
	flex-direction: column;
	width: 100%;
	min-height: var(--footerHeight);
	border-radius: var(--bRadSm);
	padding-bottom: 1rem;
`

export const Copyright = styled.div`
	font-size: 1.4rem;
	margin-bottom: var(--m-M);

	${mobileMM} {
		font-size: 1.2rem;
	}

	${mobileXS} {
		font-size: 1rem;
	}
`

export const Links = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 50%;

	li {
		${cssIndex.flexCenter}

		a {
			${cssIndex.flexCenter}

			svg {
				width: 35px;
				height: 35px;
				fill: var(--white);
				transition: fill 0.3s;
			}

			&:hover svg {
				fill: var(--main);
			}

			${mobileMM} {
				svg {
					width: 30px;
					height: 30px;
				}
			}
			${mobileXS} {
				svg {
					width: 27px;
					height: 27px;
				}
			}
		}
	}
`

export const Credits = styled.div`
	display: none;
`
