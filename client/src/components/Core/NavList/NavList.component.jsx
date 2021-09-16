import React from 'react'
import { Link } from 'react-router-dom'

import { NavListContainer } from './NavList.styles'

const NavList = () => (
	<NavListContainer>
		<li>
			<div className="nav-link-box">
				<Link data-page="home" to="/">
					Home
				</Link>
				<div className="nav-highlight nav-highlight-1"></div>
			</div>
		</li>
		<li>
			<div className="nav-link-box">
				<Link data-page="contact" to="/contact">
					Contact
				</Link>
				<div className="nav-highlight nav-highlight-2"></div>
			</div>
		</li>
		<li>
			<div className="nav-link-box">
				<Link data-page="portfolio" to="/portfolio">
					Portfolio
				</Link>
				<div className="nav-highlight nav-highlight-3"></div>
			</div>
		</li>
		<li>
			<div className="nav-link-box">
				<Link data-page="skills" to="/skills">
					Skills
				</Link>
				<div className="nav-highlight nav-highlight-4"></div>
			</div>
		</li>
		<li>
			<div className="nav-link-box">
				<Link data-page="blog" to="/blog">
					Blog
				</Link>
				<div className="nav-highlight nav-highlight-5"></div>
			</div>
		</li>
		<li>
			<div className="nav-link-box">
				<Link data-page="resume" to="/resume">
					Resume
				</Link>
				<div className="nav-highlight nav-highlight-6"></div>
			</div>
		</li>
	</NavListContainer>
)

export default NavList
