import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../utils/auth.js'

import { AdminDashboardContainer, Links, RowOne } from './AdminDashboard.styles'

const { logout } = auth

const AdminPostsDashboard = () => {
	return (
		<AdminDashboardContainer>
			<h2>Admin Tools</h2>
			<Links>
				<RowOne>
					<li>
						<Link to="/admin">Admin</Link>
					</li>
					<li>
						<Link to="/admin/create-post">Create Post</Link>
					</li>
					<li>
						<Link to="/admin/edit-posts">Edit/Delete Posts</Link>
					</li>
					<li>
						<button onClick={logout}>Logout</button>
					</li>
				</RowOne>
			</Links>
		</AdminDashboardContainer>
	)
}

export default AdminPostsDashboard
