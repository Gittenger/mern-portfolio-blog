import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const BlogDetailsContainer = styled.div`
	${cssIndex.flexCenterCol}
	align-items: flex-start;

	width: 70%;

	pre {
		width: 100%;
	}

	& > p > code {
		background: black;
		color: white;
	}

	& > pre > div > code {
		width: 85%;
	}

	& > p {
		text-align: left;
		margin-bottom: 0;
	}

	& > p + * {
		margin-top: 0.8rem;
	}

	& > p + pre {
		margin-top: 0;
	}

	pre {
		margin-bottom: 0.8rem;
	}
`
