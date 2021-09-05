import styled, { css } from 'styled-components'
import { device } from '../../styles/css/utils.styles'

// MAIN TYPOGRAPHY STYLES
// set globalScale in fontVars.js

export const H1Styles = css`
	font-family: var(--fontHeading);
	color: var(--white);
	letter-spacing: 0.05em;
	white-space: nowrap;
	text-align: center;
	transition: color 0.3s;
	text-shadow: ${({ theme: { styles } }) => styles.textShadowSubtitle};

	--scale: 1;
	font-size: calc((var(--scale) * 4.3rem) * var(--globalScale));
	margin-bottom: 1.4rem;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 3.5rem) * var(--globalScale));
		letter-spacing: 0.07em;
		margin-bottom: 1.3rem;
	}
	${device.tabletS} {
		margin-bottom: 1.2rem;
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 3rem) * var(--globalScale));
		margin-bottom: 0.9rem;
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 2.5rem) * var(--globalScale));
		margin-bottom: 0.5rem;
	}
`

export const H2Styles = css`
	font-family: var(--fontHeading);
	color: var(--white);
	letter-spacing: 0.05em;
	white-space: nowrap;
	text-align: center;
	transition: color 0.3s;
	text-shadow: ${({ theme: { styles } }) => styles.textShadowSubtitle};

	--scale: 1;
	font-size: calc((var(--scale) * 3.8rem) * var(--globalScale));
	margin-bottom: 1.4rem;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 3rem) * var(--globalScale));
		letter-spacing: 0.07em;
		margin-bottom: 1.3rem;
	}
	${device.tabletS} {
		margin-bottom: 1.2rem;
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 2.6rem) * var(--globalScale));
		margin-bottom: 0.9rem;
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		margin-bottom: 0.5rem;
	}
`

export const H3Styles = css`
	font-family: var(--fontHeading);
	color: var(--white);
	letter-spacing: 0.05em;
	white-space: nowrap;
	text-align: center;
	transition: color 0.3s;
	text-shadow: ${({ theme: { styles } }) => styles.textShadowSubtitle};

	--scale: 1;
	font-size: calc((var(--scale) * 2.9rem) * var(--globalScale));
	margin-bottom: 1.4rem;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		letter-spacing: 0.07em;
		margin-bottom: 1.3rem;
	}
	${device.tabletS} {
		margin-bottom: 1.2rem;
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 1.8rem) * var(--globalScale));
		margin-bottom: 0.9rem;
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 1.3rem) * var(--globalScale));
		margin-bottom: 0.5rem;
	}
`

export const PStyles = css`
	font-family: var(--fontMain);
	font-weight: 400;
	color: var(--white);
	letter-spacing: 0.03em;
	margin-bottom: 0.9rem;
	text-align: center;
	transition: color 0.3s;

	--scale: 1;
	font-size: calc((var(--scale) * 2.7rem) * var(--globalScale));
	line-height: 1.3;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		letter-spacing: 0.05em;
	}
	${device.tabletS} {
		font-size: calc((var(--scale) * 1.8rem) * var(--globalScale));
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 1.7rem) * var(--globalScale));
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 1.5rem) * var(--globalScale));
	}
`
export const PSmallStyles = css`
	${PStyles}
	color: var(--white);
	--scale: 0.75;
	line-height: 1.3;
	letter-spacing: 0.02em;
`

export const BtnStyles = css`
	font-family: var(--fontMain);
	font-weight: 400;
	letter-spacing: 0.03em;
	transition: color 0.3s;

	--scale: 1;
	font-size: calc((var(--scale) * 2.7rem) * var(--globalScale));
	line-height: 1.3;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		letter-spacing: 0.05em;
	}
	${device.tabletS} {
		font-size: calc((var(--scale) * 1.8rem) * var(--globalScale));
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 1.7rem) * var(--globalScale));
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 1.5rem) * var(--globalScale));
	}
`

export const P = styled.p`
	${PStyles}
`
export const PSmall = styled.p`
	${PSmallStyles}
`
export const H1 = styled.h1`
	${H1Styles}
`
export const H2 = styled.h2`
	${H2Styles}
`
export const H3 = styled.h3`
	${H3Styles}
`
export const Btn = styled.button`
	${BtnStyles}
`

export const navStyles = css`
	font-family: var(--fontHeading);
	letter-spacing: 0.24em;
	a {
		text-shadow: 2px 3px 5px #130000, -2px 0px 3px rgba(206, 239, 255, 0.2);
	}

	a:hover {
		text-shadow: 2px 3px 5px #130000, -1px 0px 3px rgba(235, 50, 55, 0.2);
	}
`

export const TComp = {
	P,
	PSmall,
	H2,
	H1,
	H3,
	Btn,
}

export default TComp
