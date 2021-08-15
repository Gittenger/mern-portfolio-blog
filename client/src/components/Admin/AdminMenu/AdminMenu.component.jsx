import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../../utils/auth.js'
import { AdminMenuContainer } from './AdminMenu.styles'

const { checkAuthToken, logout } = auth

const AdminMenu = () => {
	return (
		<AdminMenuContainer className={checkAuthToken() ? 'active' : ''}>
			<li>
				<Link to="/admin">Admin</Link>
			</li>
			<li>
				<Link onClick={logout} to="/">
					Logout
				</Link>
			</li>
		</AdminMenuContainer>
	)
}

export default AdminMenu
