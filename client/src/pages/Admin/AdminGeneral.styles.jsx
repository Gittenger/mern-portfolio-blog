import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const EditPostContainer = styled.div`
	${cssIndex.flexCenterCol}
`

export const EditProjectContainer = styled.div`
	${cssIndex.flexCenterCol}
`

export const OverviewContainer = styled.div`
	ul {
		& > * {
			margin-bottom: 2rem;
		}
	}

	.delete-prompt {
		display: none;
		opacity: 0;
		transition: opacity 0.4s;

		&.active {
			opacity: 1;
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
