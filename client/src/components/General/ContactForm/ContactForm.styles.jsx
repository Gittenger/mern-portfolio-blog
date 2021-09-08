import styled from 'styled-components'
import { cssIndex, device } from '../../../styles/css/utils.styles.js'
import { PSmallStyles, P } from '../../typography/typography.components.js'
const { laptopXS, laptopS, tabletMM, mobileM } = device

export const ContactFormContainer = styled.div`
	${cssIndex.flexCenterCol}
	width: 100%;

	& > h2 {
		--scale: 0.8;
	}
`

export const ContactFormForm = styled.form`
	${cssIndex.flexCenterCol}
	box-shadow: var(--shadowBoxPart);
	width: 40%;
	padding: 3rem;
	border-radius: var(--bRadM);
	background: var(--blackDark);

	.checkbox {
		margin-top: var(--m-XS);
		margin-bottom: var(--m-XS);
		margin-left: var(--m-L);
	}

	${laptopXS} {
		padding: 2rem 1rem;

		.checkbox {
			margin-left: 0;
		}
	}

	input[type='submit'] {
		padding: 0.4rem;
		border-radius: var(--bRadSm);
		border: none;
		transform: translateY(0);
		transition: transform 0.1s;

		&:active {
			transform: translateY(1px);
		}
	}

	${laptopS} {
		width: 50%;
	}

	${laptopXS} {
		width: 55%;
	}

	${tabletMM} {
		width: 65%;
	}
`

export const FormInstructions = styled(P)`
	width: 80%;
	--scale: 0.6;
	margin-bottom: var(--m-S);
`

export const Row = styled.div`
	${PSmallStyles}
	text-align: right;
	--scale: 0.6;
	width: 100%;
	display: grid;
	grid-template-columns: 5fr 5.5fr;
	justify-content: center;
	align-content: center;
	justify-items: center;

	${laptopXS} {
		grid-template-columns: 1fr;
		width: 85%;
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

		${laptopXS} {
			justify-self: start;
		}
	}

	// input
	& > :last-child {
		justify-self: start;
		width: 55%;
		min-width: 23rem;
		font-size: 1.4rem;
		margin: 0;
		padding: 0.7rem 0.7rem;
		color: black;
	}

	${laptopXS} {
		& > :last-child {
			width: 100%;
			min-width: 0;
		}
	}
`

export const ErrorBox = styled.div`
	${cssIndex.flexCenterCol}
	${PSmallStyles}
	background: var(--main);
	color: var(--black);
	padding: 0.3rem;
	margin-bottom: var(--m-XS);
	border-radius: var(--bRadSm);
	max-width: 70%;

	${tabletMM} {
		max-width: 80%;
	}

	${mobileM} {
		max-width: 85%;
	}
`
