import styled from 'styled-components'

export const AdminMenuContainer = styled.ul`
	position: fixed;
	bottom: 4px;
	left: 4px;
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
		text-decoration: underline;
		color: var(--white);
		transition: color 0.2s;

		&:hover {
			color: var(--main);
		}
	}
`
