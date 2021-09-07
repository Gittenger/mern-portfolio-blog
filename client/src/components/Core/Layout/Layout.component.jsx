import React, { useContext, useEffect, useState, useCallback } from 'react'

import CIndex from '../../components.index.js'
import { BackgroundContainer } from './Layout.styles'

import PageContext from '../../../contexts/PageContext'
import { sizes } from '../../../styles/css/utils.styles.js'
import { setActiveNavPage } from '../../../utils/NavFunctions.js'

const Layout = ({ children }) => {
	const { NavDesk, NavMobile, ToggleNavButton, AdminMenu, Content } = CIndex

	// STATES and CONTEXT
	const [navMobileActive, setNavMobileActive] = useState(false)
	const [showNavList, setShowNavList] = useState(false)
	const { activePage } = useContext(PageContext)
	setActiveNavPage(activePage)

	// TOGGLE NAV ACTION
	const toggleNav = () => {
		setShowNavList(!showNavList)
	}

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
		setActiveNavPage(activePage)
		checkNavMobileActive()
		if (window.screen.width <= mobileBreakpoint) {
			setNavMobileActive(true)
		}
		window.addEventListener('resize', checkNavMobileActive)
		return () => {
			window.removeEventListener('resize', checkNavMobileActive)
		}
	}, [activePage, navMobileActive, checkNavMobileActive, mobileBreakpoint])

	const DeskLayout = () => (
		<BackgroundContainer>
			<NavDesk />
			<Content>{children}</Content>
			<AdminMenu />
		</BackgroundContainer>
	)

	const MobileLayout = () => (
		<BackgroundContainer>
			<ToggleNavButton
				onClickFunc={toggleNav}
				className="toggle-nav-button"
				showNavList={showNavList}
			/>
			<NavMobile showNavList={showNavList} />
			<Content>{children}</Content>
			<AdminMenu />
		</BackgroundContainer>
	)

	return <>{navMobileActive ? MobileLayout() : DeskLayout()}</>
}

export default Layout
