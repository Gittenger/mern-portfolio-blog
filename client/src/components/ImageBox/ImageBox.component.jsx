import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletMM } = device

export const ImageBox = styled.div`
	width: 100%;
	${cssIndex.flexCenter}
	margin-bottom: var(--m-M);

	${tabletMM} {
		margin-bottom: var(--m-S);
	}

	img {
		width: 100%;
		border-radius: var(--bRadSm);
	}
`

export default ImageBox
