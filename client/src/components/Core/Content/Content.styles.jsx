import styled from 'styled-components'

import { cssIndex, device } from '../../../styles/css/utils.styles.js'

const { tabletMM } = device

export const ContentContainer = styled.div`
	width: 100%;
	min-height: 95vh;
	margin-right: 0;
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background: none;
	padding-bottom: 15rem;
	margin-top: var(--navHeight);

	${tabletMM} {
		min-height: 99vh;
	}
`
