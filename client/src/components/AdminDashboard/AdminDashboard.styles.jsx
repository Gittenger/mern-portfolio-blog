import styled from 'styled-components'
import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletMM } = device

export const AdminDashboardContainer = styled.div`
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background-color: var(--black);
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	padding-bottom: var(--m-L);

	& > h2 {
		margin-top: var(--m-L);
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
	a:visited {
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
