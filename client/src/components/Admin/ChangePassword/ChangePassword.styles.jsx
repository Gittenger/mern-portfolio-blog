import styled from 'styled-components'
import { cssIndex, device } from '../../../styles/css/utils.styles.js'
const { mobileMM } = device

export const ChangePasswordContainer = styled.div`
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background-color: var(--black);
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	padding-top: var(--m-L);

	form {
		margin-bottom: var(--m-S);
	}

	a,
	a:link,
	a:visited {
		text-decoration: underline;
		transition: color 0.2s;

		&:hover {
			color: var(--main);
		}

		&:last-child {
			margin-top: var(--m-XS);
		}
	}
`

export const Row = styled.div`
	text-align: right;
	width: 100%;
	display: grid;
	grid-template-columns: 5fr 5.5fr;
	justify-content: center;
	align-content: center;
	justify-items: center;
	overflow: hidden;

	${mobileMM} {
		grid-template-columns: 1fr;
	}

	textarea,
	input {
		font-family: inherit;
		border-radius: 0.3rem;
	}

	&:not(:last-child) {
		margin-bottom: var(--m-XXS);
	}

	// label
	& > :first-child {
		justify-self: end;
		margin-right: 2rem;

		${mobileMM} {
			justify-self: start;
		}
	}

	// input
	& > :last-child {
		justify-self: start;
		width: 60%;
		min-width: 20rem;
		font-size: 1.4rem;
		margin: 0;
		padding: 0 0.5rem;
		color: black;
	}
`

export const SubmitButton = styled.button`
	padding: 0.4rem;
	border-radius: var(--bRadSm);
	border: none;
	transform: translateY(0);
	transition: transform 0.1s;

	&:active {
		transform: translateY(1px);
	}

	margin-bottom: var(--m-XS);
`
