import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CIndex from './components/components.index.js'
import ScrollToTop from './utils/ScrollToTop.js'

import {
  HomePage,
  PortfolioPage,
  PortfolioDetailsPage,
  LoginPage,
  ContactPage,
  SkillsPage,
  ResumePage,
  CreatePostPage,
  DeletePostPage,
  EditPostsPage,
  EditPostPage,
  BlogPage,
  BlogDetailsPage,
} from './pages/pages-index.js'

const Routes = () => {
  const {
    AdminRoute,
    AdminDashboard,
    ForgotPassword,
    ResetPassword,
    ChangePassword,
    AddProject,
  } = CIndex
  return (
    <BrowserRouter>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route
            path="/portfolio/:slug"
            exact
            component={PortfolioDetailsPage}
          />
          <Route path="/addProject" exact component={AddProject} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/skills" exact component={SkillsPage} />
          <Route path="/resume" exact component={ResumePage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/blog/posts" exact component={BlogPage} />
          <Route path="/blog/posts/:slug" exact component={BlogDetailsPage} />
          <AdminRoute path="/create-post" exact component={CreatePostPage} />
          <AdminRoute path="/delete-posts" exact component={DeletePostPage} />
          <AdminRoute path="/edit-posts" exact component={EditPostsPage} />
          <AdminRoute
            path={`/edit-posts/:slug`}
            exact
            component={EditPostPage}
          />
          <AdminRoute path="/admin" exact component={AdminDashboard} />
          <AdminRoute
            path="/forgot-password"
            exact
            component={ForgotPassword}
          />
          <AdminRoute
            path="/change-password"
            exact
            component={ChangePassword}
          />
          <Route
            path="/reset-password/:token"
            exact
            component={ResetPassword}
          />
        </Switch>
      </Fragment>
    </BrowserRouter>
  )
}
export default Routes
