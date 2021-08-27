import React from 'react'

import CIndex from '../../components.index.js'
import { NavMobileContainer } from './NavMobile.styles.jsx'

const NavMobile = ({ showNavList }) => {
	const { NavList } = CIndex

	return (
		<NavMobileContainer className={showNavList ? 'show' : 'hide'}>
			<NavList />
		</NavMobileContainer>
	)
}

export default NavMobile
