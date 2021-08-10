import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletMM } = device

export const NavContainer = styled.div`
	width: 100%;
	${cssIndex.flexCenter}
	height: 9rem;
	z-index: 100;

	${tabletMM} {
		display: none;
	}
`
