import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Images from '../../assets/img/img-index'

import { HomePageContainer } from './HomePageContent.styles.jsx'
import CIndex from '../../components/components.index.js'

const { ProfileImg } = Images

const HomePageContent = () => {
	const {
		TComp: { P, PSmall },
	} = CIndex

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<HomePageContainer>
			<P>
				Hi. I'm John. I'm a software developer with a passion for learning and a
				bold outlook towards the future.
			</P>
			<PSmall>
				I have over three years of coding experience and I specialize in web
				technologies. My stack of choice is MERN.
			</PSmall>
			<img src={ProfileImg} />
			<PSmall>
				This web page was built using a MERN stack and deployed via cloud
				computing with AWS. I built a framework on top of React to help me
				quickly develop this UI and any other UI's in the future.
			</PSmall>
			<P>My skills include but are not limited to:</P>
			<ul>
				<li>React</li>
				<li>NodeJS</li>
				<li>Sass/CSS</li>
				<li>Linux/Unix</li>
				<li>Vim</li>
				<li>Cloud computing</li>
				<li>Git</li>
				<li>UI Design</li>
				<li>Python</li>
				<li>GraphQL</li>
				<li>Redux</li>
				<li>Google Firebase</li>
			</ul>
			<PSmall>
				Over my years of study I have tried lots of things. I enjoy web
				development a lot, and I am following my passion for it into my career.
			</PSmall>
			<PSmall>Here is a sampling of the work I've done:</PSmall>
			{/* Carousel of projects here */}
			{/* Link to project details page as well */}
			<P>
				Right now I am ready to put my skills to good use and am currently
				looking for an employer with whom I'll be a good fit.
			</P>
			<PSmall>I'd love to chat with you. Please, drop me a line:</PSmall>
			<Link to="/contact">Contact Me</Link>
		</HomePageContainer>
	)
}

export default HomePageContent
