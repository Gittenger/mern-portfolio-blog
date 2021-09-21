import Home from './Home/Home.component.jsx'
import Portfolio from './Portfolio/Portfolio.component.jsx'
import PortfolioDetails from './PortfolioDetails/PortfolioDetails.component.jsx'
import Login from './Login/Login.component.jsx'
import Contact from './Contact/Contact.component.jsx'
import Skills from './Skills/Skills.component.jsx'
import Blog from './Blog/Blog.component.jsx'
import BlogDetails from './BlogDetails/BlogDetails.component.jsx'
import Resume from './Resume/Resume.component.jsx'
import CreatePost from './CreatePost/CreatePost.component.jsx'
import DeletePost from './DeletePost/DeletePost.component.jsx'
import EditPosts from './EditPosts/EditPosts.component.jsx'
import EditPost from './EditPost/EditPost.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
	HomePage: getPage('Home', Home),
	PortfolioPage: getPage('Portfolio', Portfolio),
	PortfolioDetailsPage: getPage('Portfolio', PortfolioDetails),
	LoginPage: getPage('Login', Login),
	ContactPage: getPage('Contact', Contact),
	SkillsPage: getPage('Skills', Skills),
	BlogPage: getPage('Blog', Blog),
	BlogDetailsPage: getPage('Blog', BlogDetails),
	ResumePage: getPage('Resume', Resume),
	CreatePostPage: getPage('Create Post', CreatePost),
	DeletePostPage: getPage('Delete Posts', DeletePost),
	EditPostsPage: getPage('Edit Posts', EditPosts),
	EditPostPage: getPage('Edit Post', EditPost),
}

export const {
	HomePage,
	PortfolioPage,
	PortfolioDetailsPage,
	LoginPage,
	ContactPage,
	SkillsPage,
	BlogPage,
	BlogDetailsPage,
	ResumePage,
	CreatePostPage,
	DeletePostPage,
	EditPostsPage,
	EditPostPage,
} = pages
