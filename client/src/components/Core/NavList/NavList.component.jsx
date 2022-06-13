import React from 'react'
import { Link } from 'react-router-dom'

import { NavLinkBox, NavListContainer } from './NavList.styles'

const NavList = () => (
  <NavListContainer>
    <li>
      <NavLinkBox>
        <Link data-page="home" to="/">
          Home
        </Link>
        <div className="nav-highlight nav-highlight-1"></div>
      </NavLinkBox>
    </li>
    <li>
      <NavLinkBox>
        <Link data-page="contact" to="/contact">
          Contact
        </Link>
        <div className="nav-highlight nav-highlight-2"></div>
      </NavLinkBox>
    </li>
    <li>
      <NavLinkBox>
        <Link data-page="portfolio" to="/portfolio">
          Portfolio
        </Link>
        <div className="nav-highlight nav-highlight-3"></div>
      </NavLinkBox>
    </li>
    <li>
      <NavLinkBox>
        <Link data-page="skills" to="/skills">
          Skills
        </Link>
        <div className="nav-highlight nav-highlight-4"></div>
      </NavLinkBox>
    </li>
    <li>
      <NavLinkBox>
        <Link data-page="blog" to="/blog">
          Blog
        </Link>
        <div className="nav-highlight nav-highlight-5"></div>
      </NavLinkBox>
    </li>
    <li>
      <NavLinkBox>
        <Link data-page="resume" to="/resume">
          Resume
        </Link>
        <div className="nav-highlight nav-highlight-6"></div>
      </NavLinkBox>
    </li>
  </NavListContainer>
)

export default NavList
