import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../utils/auth.js'

import {
	AdminDashboardContainer,
	Links,
	RowOne,
	RowTwo,
} from './AdminDashboard.styles'

const { logout } = auth

const AdminDashboard = () => {
	return (
		<AdminDashboardContainer>
			<h2>Admin Tools</h2>
			<Links>
				<RowOne>
					<li>
						<Link to="/upload-images">Add Images</Link>
					</li>
					<li>
						<Link to="/delete-images">Delete Images</Link>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a onClick={logout} to="/">
							Logout
						</a>
					</li>
				</RowOne>
				<h2>Password Stuff</h2>
				<RowTwo>
					<li>
						<Link to="/forgot-password">Forgot password</Link>
					</li>
					<li>
						<Link to="/change-password">Change password</Link>
					</li>
				</RowTwo>
			</Links>
		</AdminDashboardContainer>
	)
}

export default AdminDashboard
