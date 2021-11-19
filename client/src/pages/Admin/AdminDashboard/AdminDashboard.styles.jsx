import styled from 'styled-components'
import { cssIndex, device } from '../../../styles/css/utils.styles.js'

const { tabletMM } = device

export const AdminDashboardContainer = styled.div`
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	padding-bottom: var(--m-L);

	& > h2 {
		margin-top: var(--m-L);
		margin-bottom: var(--m-S);
	}
`

export const ButtonsBox = styled.div`
	background-color: var(--blackLight);
	min-width: 60%;
	padding: 3rem;

	& > ul {
		width: 100%;
		display: grid;
		grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
		justify-items: center;
		align-items: center;
		grid-gap: 1.5rem;

		li {
			width: 50%;
		}
	}

	// link
	a,
	a:link,
	a:visited {
		display: block;
		text-align: center;
		width: 100%;
		height: 100%;
		white-space: nowrap;
		cursor: pointer;
		margin-right: var(--m-XS);
		padding: 0.7rem;
		background-color: var(--grey);
		color: var(--black);
		transition: all 0.3s;
	}

	a:hover {
		color: var(--grey);
		background-color: var(--main);
	}
`

export const Links = styled.div`
	${cssIndex.flexCenterCol}
	padding-top: var(--m-M);
	width: 100%;

	& > ul {
		width: 40%;

		${tabletMM} {
			width: 60%;
		}
	}

	// link
	a,
	a:link,
	a:visited,
	button {
		white-space: nowrap;
		cursor: pointer;
		margin-right: var(--m-XS);
		padding: 0.7rem;
		background-color: var(--grey);
		color: var(--black);
		transition: all 0.3s;
	}

	a:hover,
	button:hover {
		color: var(--grey);
		background-color: var(--main);
	}

	button {
		border: none;
		font-family: var(--fontMain);
		font-size: 1.7rem;
	}
`

export const RowOne = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	grid-gap: 4.5rem;
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: center;
	margin-bottom: var(--m-L);
`

export const RowTwo = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	grid-gap: 4.5rem;
	justify-items: center;
	justify-content: center;
	padding-top: var(--m-M);
`
