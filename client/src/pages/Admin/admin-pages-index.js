import AdminDashboard from './AdminDashboard/AdminDashboard.component'
import AdminPostsDashboard from './AdminDashboard/AdminPostsDashboard.component'
import AdminProjectsDashboard from './AdminDashboard/AdminProjectsDashboard.component'
import CreatePost from './AdminPost/CreatePost.component'
import CreateProject from './AdminProject/CreateProject.component'
import EditPost from './AdminPost/EditPost.component'
import EditProject from './AdminProject/EditProject.component'
import PostsOverview from './AdminPost/PostsOverview.component'
import ProjectsOverview from './AdminProject/ProjectsOverview.component'
import getPage from '../PageComponent.jsx'

const pages = {
	CreatePostPage: getPage('Create Post', CreatePost),
	CreateProjectPage: getPage('Create Project', CreateProject),
	PostsOverviewPage: getPage('Posts Dashboard', PostsOverview),
	ProjectsOverviewPage: getPage('Projects Dashboard', ProjectsOverview),
	EditPostPage: getPage('Edit Post', EditPost),
	EditProjectPage: getPage('Edit Project', EditProject),
	AdminDashboardPage: getPage('Admin', AdminDashboard),
	AdminPostsDashboardPage: getPage('Admin - Posts', AdminPostsDashboard),
	AdminProjectsDashboardPage: getPage(
		'Admin - Projects',
		AdminProjectsDashboard
	),
}

export const {
	AdminDashboardPage,
	AdminPostsDashboardPage,
	AdminProjectsDashboardPage,
	PostsOverviewPage,
	ProjectsOverviewPage,
	CreatePostPage,
	CreateProjectPage,
	EditPostPage,
	EditProjectPage,
} = pages
