import { css } from 'styled-components'

export const sharedStyles = css`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--fontHeading);
		font-weight: 400;
	}

	body,
	p {
		font-family: var(--fontMain);
	}
`

export default sharedStyles
