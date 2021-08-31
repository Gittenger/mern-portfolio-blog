import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CIndex from '../../components/components.index.js'
import { HomePageContainer, BgImgBox } from './Home.styles.jsx'

import Images from '../../assets/img/img-index'
import data from './Home.data.js'

const Home = () => {
	const {
		TComp: { P, PSmall },
		SkillIconBox,
	} = CIndex

	return (
		<HomePageContainer>
			<div className="intro-text text-box">
				<P className="leading">Hi! I'm John...</P>
				<P className="leading-sub">
					I'm a software developer with a passion for learning and a bold
					outlook towards the future.
				</P>
				<PSmall className="leading-sub-two">
					I have over three years of coding experience and I specialize in web
					technologies. My stack of choice is MERN.
				</PSmall>
			</div>
			<BgImgBox className="img-box" bgImg={Images.profile}></BgImgBox>
			<div className="text-box page-desc">
				<PSmall>
					This web page was built using the MERN stack and deployed using a
					virtual private server (VPS) with Amazon Web Services (AWS). I built a
					simple framework on top of React to help me quickly develop this UI
					and any others in the future.
				</PSmall>
			</div>
			<div className="text-box list-header">
				<P>My skills include but are not limited to...</P>
			</div>
			<ul>
				{data.map((el, i) => (
					<li key={i}>
						<SkillIconBox
							skillClassName="skill-img"
							className="icon-box"
							name={el.name}
							img={el.img}
						/>
					</li>
				))}
			</ul>
			<div className="text-box project-desc">
				<PSmall>
					In my years of study, I have tried lots of things in an effort to
					broaden my skill set. I enjoy web development a lot, and I am
					following my self-directed passion for it into my career.
				</PSmall>
				<PSmall>Here is a sampling of the work I've done:</PSmall>
			</div>
			<div className="projects-sample">
				<div className="project-link">
					<Link to="/portfolio/my-first-project">Project One</Link>
				</div>

				<div className="project-link">
					<Link to="/portfolio/project-two">Project Two</Link>
				</div>
			</div>
			<div className="text-box cta">
				<P className="cta-leading">
					Right now I am more than ready to put my skills to good use and am
					currently looking for an employer with whom I'll be a good fit. I'm
					looking for work in the New York City, New Jersey, and Philadelphia
					areas -- or remote work.
				</P>
				<PSmall className="cta-sub">
					If you'd like to discuss work or collaboration opportunities, I'd love
					to chat with you. Please, drop me a line:
				</PSmall>
				<Link to="/contact">Contact Me</Link>
			</div>
		</HomePageContainer>
	)
}

export default Home
