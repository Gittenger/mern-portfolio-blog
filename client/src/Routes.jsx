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
	BlogPage,
	BlogDetailsPage,
} from './pages/pages-index.js'

import {
	AdminDashboardPage,
	AdminPostsDashboardPage,
	AdminProjectsDashboardPage,
	CreatePostPage,
	CreateProjectPage,
	EditPostPage,
	EditProjectPage,
	PostsOverviewPage,
	ProjectsOverviewPage,
} from './pages/Admin/admin-pages-index.js'

const Routes = () => {
	const { AdminRoute, ForgotPassword, ResetPassword, ChangePassword } = CIndex
	return (
		<BrowserRouter>
			<Fragment>
				<ScrollToTop />
				<Switch>
					{/* public routes */}
					<Route path="/" exact component={HomePage} />
					<Route path="/login" exact component={LoginPage} />
					<Route path="/portfolio" exact component={PortfolioPage} />
					<Route path="/portfolio/:slug" exact component={PortfolioDetailsPage} />
					<Route path="/contact" exact component={ContactPage} />
					<Route path="/skills" exact component={SkillsPage} />
					<Route path="/resume" exact component={ResumePage} />
					<Route path="/blog" exact component={BlogPage} />
					<Route path="/blog/posts" exact component={BlogPage} />
					<Route path="/blog/posts/:slug" exact component={BlogDetailsPage} />

					{/* admin routes */}
					<AdminRoute path="/admin" exact component={AdminDashboardPage} />
					<AdminRoute
						path="/admin/posts"
						exact
						component={AdminPostsDashboardPage}
					/>
					<AdminRoute
						path="/admin/projects"
						exact
						component={AdminProjectsDashboardPage}
					/>
					<AdminRoute path="/admin/create-post" exact component={CreatePostPage} />
					<AdminRoute path="/admin/edit-posts" exact component={PostsOverviewPage} />
					<AdminRoute
						path={`/admin/edit-post/:slug`}
						exact
						component={EditPostPage}
					/>
					<AdminRoute
						path="/admin/create-project"
						exact
						component={CreateProjectPage}
					/>
					<AdminRoute
						path="/admin/edit-projects"
						exact
						component={ProjectsOverviewPage}
					/>
					<AdminRoute
						path={`/admin/edit-project/:slug`}
						exact
						component={EditProjectPage}
					/>
					{/* password routes */}
					<AdminRoute path="/forgot-password" exact component={ForgotPassword} />
					<AdminRoute path="/change-password" exact component={ChangePassword} />
					<Route path="/reset-password/:token" exact component={ResetPassword} />
				</Switch>
			</Fragment>
		</BrowserRouter>
	)
}
export default Routes
