import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CIndex from './components/components.index.js'

import {
  HomePage,
  PortfolioPage,
  PortfolioDetailsPage,
  LoginPage,
  ContactPage,
  SkillsPage,
  ResumePage,
  BuildPage,
  BlogPage,
} from './pages/pages-index.js'

const Routes = () => {
  const {
    AdminRoute,
    AdminDashboard,
    ForgotPassword,
    ResetPassword,
    ChangePassword,
    BlogPost,
  } = CIndex
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
        <Route
          path="/portfolio/:projectName"
          exact
          component={PortfolioDetailsPage}
        />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/skills" exact component={SkillsPage} />
        <Route path="/resume" exact component={ResumePage} />
        <Route path="/build" exact component={BuildPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/blog/posts" exact component={BlogPage} />
        <Route path="/blog/posts/:slug" exact component={BlogPost} />
        <AdminRoute path="/admin" exact component={AdminDashboard} />
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
