import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const DeleteImageContainer = styled.div`
	padding: 2rem 3rem;
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background-color: var(--black);
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	padding-top: var(--m-L);

	a,
	a:link,
	a:visited {
		margin: var(--m-S) auto;
		text-decoration: underline;
		transition: color 0.2s;

		&:hover {
			color: var(--main);
		}
	}
`

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(1fr, 300px));
	grid-row-gap: 1rem;
	grid-column-gap: 0.8rem;

	div {
		position: relative;
		${cssIndex.flexCenterCol}
		border: solid 3px var(--main);
		border-radius: 5px;
		padding: 2rem 0 1rem;

		img {
			object-fit: cover;
			max-width: 80%;
			max-height: 70%;
			margin-bottom: 2rem;
		}

		button {
			position: absolute;
			bottom: 1rem;
			cursor: pointer;
			font-size: 1.2em;
			padding: 0.5rem;
			transition: all 0.2s;

			&:hover {
				background: var(--main);
				color: var(--white);
			}
		}
	}
`
