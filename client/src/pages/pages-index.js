import Home from './Home/Home.component.jsx'
import Portfolio from './Portfolio/Portfolio.component.jsx'
import PortfolioDetails from './PortfolioDetails/PortfolioDetails.component.jsx'
import Login from './Login/Login.component.jsx'
import Contact from './Contact/Contact.component.jsx'
import Skills from './Skills/Skills.component.jsx'
import Blog from './Blog/Blog.component.jsx'
import BlogDetails from './BlogDetails/BlogDetails.component.jsx'
import Resume from './Resume/Resume.component.jsx'
import Build from './Build/Build.component.jsx'

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
	BuildPage: getPage('Build', Build),
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
	BuildPage,
} = pages
