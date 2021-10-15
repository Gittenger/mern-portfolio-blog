import AdminDashboard from './AdminDashboard/AdminDashboard.component'
import AdminPostsDashboard from './AdminDashboard/AdminPostsDashboard.component'
import AdminProjectsDashboard from './AdminDashboard/AdminProjectsDashboard.component'
import AdminSkillsDashboard from './AdminDashboard/AdminSkillsDashboard.component'
import CreatePost from './AdminPost/CreatePost.component'
import CreateProject from './AdminProject/CreateProject.component'
import CreateSkill from './AdminSkill/CreateSkill.component'
import EditPost from './AdminPost/EditPost.component'
import EditProject from './AdminProject/EditProject.component'
import EditSkill from './AdminSkill/EditSkill.component'
import EditOverview from './EditOverview.component'
import getPage from '../PageComponent.jsx'

const pages = {
	CreatePostPage: getPage('Create Post', CreatePost),
	CreateProjectPage: getPage('Create Project', CreateProject),
	CreateSkillPage: getPage('Create Skill', CreateSkill),
	PostsOverviewPage: getPage('Posts Dashboard', EditOverview, {
		name: 'posts',
		nameSingular: 'post',
	}),
	ProjectsOverviewPage: getPage('Projects Dashboard', EditOverview, {
		name: 'projects',
		nameSingular: 'project',
	}),
	SkillsOverviewPage: getPage('Skills Dashboard', EditOverview, {
		name: 'skills',
		nameSingular: 'skill',
	}),
	EditPostPage: getPage('Edit Post', EditPost),
	EditProjectPage: getPage('Edit Project', EditProject),
	EditSkillPage: getPage('Edit Skill', EditSkill),
	AdminDashboardPage: getPage('Admin', AdminDashboard),
	AdminPostsDashboardPage: getPage('Admin - Posts', AdminPostsDashboard),
	AdminProjectsDashboardPage: getPage(
		'Admin - Projects',
		AdminProjectsDashboard
	),
	AdminSkillsDashboardPage: getPage('Admin - Skills', AdminSkillsDashboard),
}

export const {
	AdminDashboardPage,
	AdminPostsDashboardPage,
	AdminProjectsDashboardPage,
	AdminSkillsDashboardPage,
	PostsOverviewPage,
	ProjectsOverviewPage,
	SkillsOverviewPage,
	CreatePostPage,
	CreateProjectPage,
	CreateSkillPage,
	EditPostPage,
	EditProjectPage,
	EditSkillPage,
} = pages
