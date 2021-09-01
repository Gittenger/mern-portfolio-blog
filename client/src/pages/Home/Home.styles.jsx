import styled from 'styled-components'

import { cssIndex, device, deviceMin } from '../../styles/css/utils.styles.js'
const { desktop, tabletMM, laptopS, tabletLand, mobileMM, mobileS } = device
const { minLaptopS } = deviceMin

export const HomePageContainer = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;
	width: 100%;
	background: none;
	padding: 7rem 0 10rem;
	${cssIndex.keyFrames.fadein}

	${tabletMM} {
		padding: 4rem 0 5rem;
	}

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
			margin-bottom: 3rem;
			font-weight: bold;
			--scale: 1.5;

			&-sub {
				margin-bottom: 2rem;
				--scale: 1.1;

				&-two {
					max-width: 60%;
					margin-bottom: 5rem;
					--scale: 0.8;

					${mobileS} {
						margin-bottom: 3rem;
					}
				}
			}
		}
	}

	// img
	& > .img-box {
		margin-bottom: 8rem;

		${tabletMM} {
			margin-bottom: 6rem;
		}

		${mobileS} {
			margin-bottom: 5rem;
		}
	}

	// page-desc
	& > .page-desc > p {
		margin-bottom: 7rem;
	}

	// list-header
	& > .list-header {
		width: 100%;

		& > p {
			width: 100%;
			--scale: 1.1;
			font-weight: bold;
			margin-bottom: 3rem;
		}
	}

	// List
	& > ul {
		margin-bottom: 6rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-row-gap: 1.2rem;
		grid-column-gap: 4rem;
		grid-auto-rows: 200px;
		align-items: start;
		width: 80%;

		li {
			height: 100%;

			.icon-box {
				height: 100%;

				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: 30% 1fr;
				justify-items: center;
				align-items: center;
			}

			p {
				margin-bottom: 0;
				font-style: italic;
				font-weight: bold;
			}

			.skill-img {
				margin-top: -30px;
				max-width: 90px;
				max-height: 100px;
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
			--scale: 0.8;
			margin-bottom: 8rem;
		}

		& > p:last-child {
			--scale: 0.9;
			margin-bottom: 2rem;
		}
	}

	// projects
	& > .projects-sample {
		${cssIndex.flexCenter}
		align-items: space-evenly;
		margin-bottom: 9rem;

		& > .project-link {
			${cssIndex.flexCenterCol}
			background: red;
			border-radius: 50%;
			width: 100px;
			height: 100px;
			margin: 0 2rem;

			a {
				${cssIndex.flexCenterCol}
				text-align: center;
				width: 100%;
				height: 100%;
			}
		}
	}

	// cta
	& > .cta {
		& > .cta-leading {
			--scale: 0.9;
			margin-bottom: 7rem;
		}

		& > .cta-sub {
			--scale: 0.7;
			margin-bottom: 2rem;
		}

		a:link,
		a:visited {
			color: var(--white);
			background: black;
			border: 2px solid transparent;
			padding: 10px;
			border-radius: 10px;
			transition: all .3s;

			&:hover {
				color: var(--main);
				border 2px solid var(--white);
				transition: all .3s;
			}

			&:active {
				color: var(--black);
				background: var(--white);
				border: 2px solid black;
			}
		}
	}
`

export const BgImgBox = styled.div`
	border-radius: 50px;
	background-image: ${({ bgImg }) => `url('${bgImg}')`};
	background-size: cover;
	background-position: bottom 0 left 0;
	background-repeat: no-repeat;
	width: 50%;
	height: 1400px;

	${desktop} {
		width: 60%;
		height: 1300px;
	}

	${laptopS} {
		width: 70%;
		height: 1150px;
	}

	${tabletLand} {
		width: 80%;
		height: 970px;
	}

	${tabletMM} {
		width: 85%;
		height: 800px;
	}

	${mobileMM} {
		width: 90%;
		height: 650px;
	}

	${mobileS} {
		height: 500px;
	}
`
