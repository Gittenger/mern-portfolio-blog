import styled from 'styled-components'

import { cssIndex } from '../../../styles/css/utils.styles.js'

export const ToggleNavButtonContainer = styled.button`
	${cssIndex.flexCenter}
	width: 2rem;
	height: 2rem;
	background: var(--main);
	padding-bottom: 2px;
	padding-left: 2px;
	padding-right: 2px;
	border-radius: 4px;
	cursor: pointer;
	border: none;
	color: var(--black);
	transition: all 0.4s;

	&.inactive {
		transform: rotate(0);
	}

	&.active {
		transform: rotate(180deg);
	}
`
