import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletMM } = device

export const UploadImageContainer = styled.div`
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background-color: var(--black);
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	padding-top: var(--m-L);

	p {
		margin-bottom: var(--m-S);
	}

	form {
		${cssIndex.flexCenterCol}
		margin-bottom: var(--m-M);

		input {
			cursor: pointer;
			margin-bottom: var(--m-S);
		}
	}

	button {
		cursor: pointer;
		padding: 0.8rem;
		margin-top: var(--m-XXS);

		background-color: var(--grey);
		color: var(--black);
		transition: all 0.3s;

		&:hover {
			color: var(--grey);
			background-color: var(--main);
		}
	}

	a,
	a:link,
	a:visited {
		text-decoration: underline;
		transition: color 0.2s;

		&:hover {
			color: var(--main);
		}
	}

	${tabletMM} {
		p {
			margin-bottom: var(--m-XS);
		}

		form {
			input {
				margin-bottom: var(--m-XS);
			}
		}

		button {
			padding: 0.5rem;
		}
	}
`
