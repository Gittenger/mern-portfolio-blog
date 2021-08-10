import { css } from 'styled-components'

// MEDIA QUERIES
export const sizes = {
	mobileXXS: '350px',
	mobileXS: '375px',
	mobileS: '435px',
	mobileM: '500px',
	mobileMM: '570px',
	tabletS: '650px',
	tabletMM: '768px',
	tabletM: '800px',
	tabletL: '870px',
	tabletLand: '940px',
	laptopXS: '1024px',
	laptopS: '1190px',
	laptopM: '1350px',
	laptopL: '1440px',
	desktop: '1600px',
	desktopL: '1900px',
	heightM: '740px',
	heightS: '630px',
	heightXS: '515px',
	heightXXS: '445px',
}

const {
	mobileXXS,
	mobileXS,
	mobileS,
	mobileM,
	mobileMM,
	tabletS,
	tabletM,
	tabletMM,
	tabletL,
	tabletLand,
	laptopXS,
	laptopS,
	laptopM,
	laptopL,
	desktop,
	desktopL,
	heightM,
	heightS,
	heightXS,
	heightXXS,
} = sizes

export const device = {
	mobileXXS: `@media only screen and (max-width: ${mobileXXS})`,
	mobileXS: `@media only screen and (max-width: ${mobileXS})`,
	mobileS: `@media only screen and (max-width: ${mobileS})`,
	mobileM: `@media only screen and (max-width: ${mobileM})`,
	mobileMM: `@media only screen and (max-width: ${mobileMM})`,
	tabletS: `@media only screen and (max-width: ${tabletS})`,
	tabletMM: `@media only screen and (max-width: ${tabletMM})`,
	tabletM: `@media only screen and (max-width: ${tabletM})`,
	tabletL: `@media only screen and (max-width: ${tabletL})`,
	tabletLand: `@media only screen and (max-width: ${tabletLand})`,
	laptopXS: `@media only screen and (max-width: ${laptopXS})`,
	laptopS: `@media only screen and (max-width: ${laptopS})`,
	laptopM: `@media only screen and (max-width: ${laptopM})`,
	laptopL: `@media only screen and (max-width: ${laptopL})`,
	desktop: `@media only screen and (max-width: ${desktop})`,
	desktopL: `@media only screen and (max-width: ${desktopL})`,
}

export const deviceMin = {
	minMobileS: `@media only screen and (min-width: ${mobileS})`,
	minMobileM: `@media only screen and (min-width: ${mobileM})`,
	minmobileMM: `@media only screen and (min-width: ${mobileMM})`,
	minTabletS: `@media only screen and (min-width: ${tabletS})`,
	minTabletMM: `@media only screen and (min-width: ${tabletMM})`,
	minTabletL: `@media only screen and (min-width: ${tabletL})`,
	minTabletLand: `@media only screen and (min-width: ${tabletLand})`,
	minLaptopXS: `@media only screen and (min-width: ${laptopXS})`,
	minLaptopS: `@media only screen and (min-width: ${laptopS})`,
	minLaptopM: `@media only screen and (min-width: ${laptopM})`,
	minLaptopL: `@media only screen and (min-width: ${laptopL})`,
	minDesktop: `@media only screen and (min-width: ${desktop})`,
	minDesktopL: `@media only screen and (min-width: ${desktopL})`,
}

export const deviceHeight = {
	heightM: `@media only screen and (max-height: ${heightM})`,
	heightS: `@media only screen and (max-height: ${heightS})`,
	heightXS: `@media only screen and (max-height: ${heightXS})`,
	heightXXS: `@media only screen and (max-height: ${heightXXS})`,
}

export const cssIndex = {
	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	flexCenterCol: css`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`,
	scrollBarStyles: css`
		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
			background-color: #cccccc;
		}
		&::-webkit-scrollbar {
			width: 10px;
			background-color: #f5f5f5;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #fff;
			background-image: -webkit-linear-gradient(
				90deg,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 1) 25%,
				transparent 100%,
				rgba(0, 0, 0, 1) 75%,
				transparent
			);
		}
	`,
}

const utils = {
	sizes,
	device,
	deviceMin,
	cssIndex,
}

export default utils
