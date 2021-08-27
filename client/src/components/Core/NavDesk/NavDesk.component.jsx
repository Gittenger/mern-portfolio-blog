import React from 'react'

import CIndex from '../../components.index.js'
import { NavDeskContainer } from './NavDesk.styles.jsx'

const NavDesk = () => {
	const { NavList } = CIndex

	return (
		<NavDeskContainer>
			<NavList />
		</NavDeskContainer>
	)
}

export default NavDesk
