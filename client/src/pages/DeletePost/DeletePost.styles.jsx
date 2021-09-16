import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const DeletePostContentContainer = styled.div`
	ul {
		& > * {
			margin-bottom: 2rem;
		}
	}
`

export const Row = styled.div`
	${cssIndex.flexCenter}

	p {
		margin-bottom: 0;
	}

	button {
		margin-left: 0.7rem;
		cursor: pointer;
	}
`
