import styled from 'styled-components'

import { cssIndex, device, deviceMin } from '../../styles/css/utils.styles.js'
const { tabletMM } = device
const { minLaptopS } = deviceMin

export const HomePageContainer = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;
	width: 100%;
	background: none;
	padding: 0 0 10rem;

	// all text-boxes
	.text-box {
		${cssIndex.flexCenter}
		flex-direction: column;

		& > p {
			max-width: 90%;
		}
	}

	// intro
	& > .intro-text {
		.leading {
			margin-bottom: 0;
			--scale: 1.3;

			&-sub {
				margin-bottom: 1.5rem;
			}
		}
	}

	// img
	& > .img-box {
		max-width: 95%;
		margin-bottom: 1.8rem;

		img {
			width: 100%;
			border-radius: 30px;
		}
	}

	// page-desc
	& > .page-desc > p {
		margin-bottom: 2rem;
	}

	// list-header
	& > .list-header {
		width: 100%;
		& > p {
			width: 100%;
			margin-bottom: 1.5rem;
		}
	}

	// List
	& > ul {
		margin-bottom: 6rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		grid-row-gap: 1.2rem;
		grid-column-gap: 4rem;
		grid-auto-rows: 40px;
		width: 80%;

		li {
			${cssIndex.flexCenterCol}

			p {
				margin-bottom: 0;
				font-style: italic;
				font-weight: bold;
			}
		}

		${minLaptopS} {
			grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
			li {
				p {
					white-space: nowrap;
				}
			}
		}
	}

	// project-desc
	& > .project-desc {
		& > p:first-child {
			margin-bottom: 3rem;
		}

		& > p:last-child {
			margin-bottom: 2rem;
		}
	}

	// projects
	& > .projects-sample {
		${cssIndex.flexCenter}
		align-items: space-evenly;
		margin-bottom: 4rem;

		& > .project-link {
			background: red;
			border-radius: 50%;
			width: 100px;
			height: 100px;
			margin: 0 2rem;

			a {
				${cssIndex.flexCenterCol}
				width: 100%;
				height: 100%;
			}
		}
	}

	${tabletMM} {
		padding: 4rem 0 5rem;
	}
`
