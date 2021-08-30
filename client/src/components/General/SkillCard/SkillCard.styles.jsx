import styled from 'styled-components'
import { cssIndex } from '../../../styles/css/utils.styles.js'

export const SkillCardContainer = styled.div`
	${cssIndex.flexCenterCol}
	align-items: flex-start;
	background-image: linear-gradient(
		160deg,
		var(--white) 0%,
		var(--greyMedium) 250%
	);
	padding: 1rem 3rem 5rem;
	border-radius: 10px;
	box-shadow: var(--shadowBoxOne);

	// title
	& > .title-box {
		${cssIndex.flexCenter}
		margin-bottom: .8rem;

		h1 {
			margin-left: 1.4rem;
		}

		.logo-img {
			padding: 1rem;
			max-width: 90px;
		}
	}

	// description box
	& > .desc {
		width: 80%;
		margin-bottom: 2rem;
		border: solid var(--black) 2px;
		border-radius: 7px;
		padding: 1.5rem;
		box-shadow: var(--shadowBoxTwo);
		background-image: linear-gradient(
			270deg,
			white -50%,
			var(--greyMedium) 500%
		);
	}

	// bullet list
	& > ul {
		display: list-item;

		li {
			margin-left: 5rem;
			list-style: disc;
		}
	}
`
