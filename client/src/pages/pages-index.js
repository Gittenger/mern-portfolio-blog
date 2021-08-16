import HomePageContent from './HomePageContent/HomePageContent.component.jsx'
import PortfolioPageContent from './PortfolioPageContent/PortfolioPageContent.component.jsx'
import PortfolioDetailsContent from './PortfolioDetailsContent/PortfolioDetailsContent.component.jsx'
import LoginPageContent from './LoginPageContent/LoginPageContent.component.jsx'
import ContactPageContent from './ContactPageContent/ContactPageContent.component.jsx'
import SkillsPageContent from './SkillsPageContent/SkillsPageContent.component.jsx'
import BlogPageContent from './BlogPageContent/BlogPageContent.component.jsx'
import ResumePageContent from './ResumePageContent/ResumePageContent.component.jsx'
import BuildPageContent from './BuildPageContent/BuildPageContent.component.jsx'

import getPage from './PageComponent.jsx'

const pages = {
  HomePage: getPage('Home', HomePageContent),
  PortfolioPage: getPage('Portfolio', PortfolioPageContent),
  PortfolioDetails: getPage('Portfolio', PortfolioDetailsContent),
  LoginPage: getPage('Login', LoginPageContent),
  ContactPage: getPage('Contact', ContactPageContent),
  SkillsPage: getPage('Skills', SkillsPageContent),
  BlogPage: getPage('Blog', BlogPageContent),
  ResumePage: getPage('Resume', ResumePageContent),
  BuildPage: getPage('Build', BuildPageContent),
}

export const {
  HomePage,
  PortfolioPage,
  PortfolioDetails,
  LoginPage,
  ContactPage,
  SkillsPage,
  BlogPage,
  ResumePage,
  BuildPage,
} = pages
