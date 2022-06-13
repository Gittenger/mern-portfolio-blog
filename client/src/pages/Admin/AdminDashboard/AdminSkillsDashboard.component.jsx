import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import auth from '../../../utils/auth.js'

import { AdminDashboardContainer, Links, RowOne } from './AdminDashboard.styles'

const { logout } = auth

const AdminSkillsDashboard = () => {
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
            <Link to="/admin/create-skill">Create Skill</Link>
          </li>
          <li>
            <Link to="/admin/edit-skills">Edit/Delete Skills</Link>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </RowOne>
      </Links>
    </AdminDashboardContainer>
  )
}

export default AdminSkillsDashboard
