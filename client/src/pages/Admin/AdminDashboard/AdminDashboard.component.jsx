import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../utils/auth.js'

import { AdminDashboardContainer, ButtonsBox } from './AdminDashboard.styles'

const { logout } = auth

const AdminDashboard = () => {
	return (
		<AdminDashboardContainer>
			<h2>Admin Tools</h2>
			<h2>Manage Content</h2>
			<ButtonsBox cols="3">
				<ul>
					<li>
						<Link to="/admin/posts">Posts</Link>
					</li>
					<li>
						<Link to="/admin/projects">Projects</Link>
					</li>
					<li>
						<Link to="/admin/skills">Skills</Link>
					</li>
				</ul>
			</ButtonsBox>
			<h2>Manage Account</h2>
			<ButtonsBox cols="2">
				<ul>
					<li>
						<Link to="/forgot-password">Forgot Password</Link>
					</li>
					<li>
						<Link to="/change-password">Change Password</Link>
					</li>
				</ul>
			</ButtonsBox>
		</AdminDashboardContainer>
	)
}

export default AdminDashboard
