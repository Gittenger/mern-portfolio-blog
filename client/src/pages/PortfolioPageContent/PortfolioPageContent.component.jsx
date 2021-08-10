import React, { useState, useEffect, useCallback } from 'react'
import 'react-gallery-carousel/dist/index.css'

import { sizes } from '../../styles/css/utils.styles.js'

import { LocalImages } from '../../assets/img/img-index.js'

import {
	PortfolioPageContainer,
	StyledCarousel,
} from './PortfolioPageContent.styles'

const Portfolio = () => {
	const [images, setImages] = useState([])
	const [navMobileActive, setNavMobileActive] = useState(false)

	// BREAKPOINT
	const { tabletMM } = sizes
	const mobileBreakpoint = parseInt(tabletMM.match(/[0-9]+/)[0])

	// WINDOW WIDTH EVENT LISTENER
	const checkNavMobileActive = useCallback(() => {
		if (window.innerWidth <= mobileBreakpoint) {
			setNavMobileActive(true)
		} else setNavMobileActive(false)
	}, [mobileBreakpoint])

	// ON COMPONENT RENDER
	useEffect(() => {
		checkNavMobileActive()
		if (window.screen.width <= mobileBreakpoint) {
			setNavMobileActive(true)
		}
		window.addEventListener('resize', checkNavMobileActive)
		return () => {
			window.removeEventListener('resize', checkNavMobileActive)
		}
	}, [navMobileActive, checkNavMobileActive, mobileBreakpoint])

	useEffect(() => {
		// Using Api...
		// fetch(`${process.env.REACT_APP_API}/images`, {
		//   method: 'GET',
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		// })
		//   .then((res) => res.json())
		//   .then(({ images }) => {
		//     setImages(
		//       images.map((img) => ({
		//         src: `${process.env.REACT_APP_PUBLIC}/img/${img.name}`,
		//       }))
		//     )
		//   })
		//   .catch((err) => console.error(err))
		// Using Local files for demo
		setImages(
			LocalImages.map((img) => ({
				src: img,
			}))
		)
		window.scrollTo(0, 0)
	}, [])

	return (
		<PortfolioPageContainer>
			<StyledCarousel
				images={images}
				isAutoPlaying={true}
				hasIndexBoard={false}
				hasThumbnailsAtMax={false}
				hasThumbnails={navMobileActive ? false : true}
				hasRightButton={navMobileActive ? 'bottomRight' : 'centerRight'}
				hasLeftButton={navMobileActive ? 'bottomLeft' : 'centerLeft'}
			/>
		</PortfolioPageContainer>
	)
}

export default Portfolio
