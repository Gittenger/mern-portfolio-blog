import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import auth from '../../../utils/auth.js'

import { AdminDashboardContainer, Links, RowOne } from './AdminDashboard.styles'

const { logout } = auth

const AdminPostsDashboard = () => {
  const history = useHistory()
  return (
    <AdminDashboardContainer>
      <h2>Admin Tools</h2>
      <Links>
        <RowOne>
          <li>
            <button onClick={history.goBack}>Menu</button>
          </li>
          <li>
            <Link to="/admin/create-project">Create Project</Link>
          </li>
          <li>
            <Link to="/admin/edit-projects">Edit/Delete Projects</Link>
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
