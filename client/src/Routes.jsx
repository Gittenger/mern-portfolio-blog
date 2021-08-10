import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CIndex from './components/components.index.js'

import {
  HomePage,
  PortfolioPage,
  LoginPage,
  ContactPage,
  SkillsPage,
  BlogPage,
} from './pages/pages-index.js'

const Routes = () => {
  const {
    AdminRoute,
    AdminDashboard,
    UploadImage,
    DeleteImage,
    ForgotPassword,
    ResetPassword,
    ChangePassword,
  } = CIndex
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/skills" exact component={SkillsPage} />
        <Route path="/blog" exact component={BlogPage} />
        <AdminRoute path="/admin" exact component={AdminDashboard} />
        <AdminRoute path="/upload-images" exact component={UploadImage} />
        <AdminRoute path="/delete-images" exact component={DeleteImage} />
        <AdminRoute path="/forgot-password" exact component={ForgotPassword} />
        <AdminRoute path="/change-password" exact component={ChangePassword} />
        <AdminRoute
          path="/reset-password/:token"
          exact
          component={ResetPassword}
        />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
