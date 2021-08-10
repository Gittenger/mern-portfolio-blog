import HomePageContent from './HomePageContent/HomePageContent.component.jsx'
import PortfolioPageContent from './PortfolioPageContent/PortfolioPageContent.component.jsx'
import LoginPageContent from './LoginPageContent/LoginPageContent.component.jsx'
import ContactPageContent from './ContactPageContent/ContactPageContent.component.jsx'
import SkillsPageContent from './SkillsPageContent/SkillsPageContent.component.jsx'
import BlogPageContent from './BlogPageContent/BlogPageContent.component.jsx'
import ResumePageContent from './ResumePageContent/ResumePageContent.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
  HomePage: getPage('Home', HomePageContent),
  PortfolioPage: getPage('Portfolio', PortfolioPageContent),
  LoginPage: getPage('Login', LoginPageContent),
  ContactPage: getPage('Contact', ContactPageContent),
  SkillsPage: getPage('Skills', SkillsPageContent),
  BlogPage: getPage('Blog', BlogPageContent),
  ResumePage: getPage('Resume', ResumePageContent),
}

export const {
  HomePage,
  PortfolioPage,
  LoginPage,
  ContactPage,
  SkillsPage,
  BlogPage,
  ResumePage,
} = pages
