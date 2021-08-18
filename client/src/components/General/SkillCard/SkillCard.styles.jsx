import styled from 'styled-components'
import { cssIndex } from '../../../styles/css/utils.styles.js'

export const SkillCardContainer = styled.div`
	${cssIndex.flexCenterCol}
	align-items: flex-start;
	background: var(--main);
	padding: 5rem;
	border-radius: 10px;

	& > ul {
		display: list-item;
		li {
			margin-left: 5rem;
			list-style: disc;
		}
	}

	.img {
		background: var(--white);
		border-radius: 10px;
		padding: 0.7rem;
		max-width: 220px;

		img {
			max-width: 100%;
		}
	}
`
