import typography from './typography/typography'
import { cssIndex } from './css/utils.styles'

const colors = {
	white: '#fefefe',
	greyLight: '#f8f8f8',
	greyMedium: '#dddddd',
	dark: '#363435',
	darker: '#252324',
	blackLight: `#131213`,
	black: '#0a0a0a',
	main: '#1479EB',
}

const colorsRGB = {
	white: '254, 254, 254',
	greyLight: '248, 248, 248',
	greyMedium: '221, 221, 221',
	dark: '54, 52, 53',
	darker: '37, 35, 36',
	black: '15, 14, 15',
	main: '20, 121, 235',
}

const gradient = {
	boxGradient: `linear-gradient(300deg, ${colors.black} 0%, ${colors.darker} 500%)`,
}

const styles = {
	borderRadiusSm: '.5rem',
	borderRadiusM: '.9rem',
	marginXXXSmall: '.5rem',
	marginXXSmall: '.9rem',
	marginXSmall: '1.9rem',
	marginSmall: '2.5rem',
	marginSmallMedium: '3.5rem',
	marginMedium: '5rem',
	marginLarge: '10rem',
	boxShadowPartialOne: '-2px -1px 5px 1px rgba(0, 0, 0, 0.13)',
	boxShadowFullOne:
		'2px 2px 5px rgba(0, 0, 0, 0.2), -2px -3px 5px rgba(0, 0, 0, 0.25)',
	boxShadowFullTwo:
		'2px 1px 4px rgba(0, 0, 0, 0.2), -1px -2px 3px rgba(0, 0, 0, 0.2)',
	boxShadowTitleBox: '15px 2px 0px 1px rgba(0, 0, 0, 0.18)',
	textShadowSubtitles: '0px 4px 3px rgba(0, 0, 0, 0.4)',
	textShadowTitle: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

export const css = {
	...cssIndex,
}

const theme = {
	colors,
	colorsRGB,
	gradient,
	styles,
	typography,
	css,
}

export default theme
