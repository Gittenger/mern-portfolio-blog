import styled from 'styled-components'
import { navStyles } from '../../typography/typography.components.js'

export const AdminMenuContainer = styled.ul`
	${navStyles}
	position: fixed;
	top: 8px;
	right: 10px;
	z-index: 10000;
	display: none;

	&.active {
		display: block;
	}

	li:first-child {
		margin-bottom: var(--m-XXXS);
	}

	a,
	a:link,
	a:visited {
		transition: color 0.2s;

		&:hover {
			color: var(--main);
		}
	}
`
