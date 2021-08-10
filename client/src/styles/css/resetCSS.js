import { css } from 'styled-components'

export const resetCSS = css`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;

		width: 100%;
		overflow-x: hidden;
	}

	body {
		width: 100%;
		overflow-x: hidden;
	}

	a {
		text-decoration: none;
	}

	a:link,
	a:visited {
		color: unset;
	}

	ul,
	li {
		list-style: none;
	}

	button {
		font-family: inherit;
	}
`

export default resetCSS
