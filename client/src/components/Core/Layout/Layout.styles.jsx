import styled from 'styled-components'

export const BackgroundContainer = styled.div`
	position: relative;
	top: 0;
	width: 100%;
	overflow-x: hidden;

	& > .toggle-nav-button {
		position: fixed;
		z-index: 500;
		bottom: 4rem;
		right: 1.2rem;
	}
`
