import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useApiData } from '../../utils/hooks.js'
import sal from 'sal.js'
import 'sal.js/dist/sal.css'

import CIndex from '../../components/components.index.js'
import { HomePageContainer, BgImgBox } from './Home.styles.jsx'

import Images from '../../assets/img/img-index'
import iconData from './Home.data.js'

const Home = () => {
	useEffect(() => {
		sal({
			threshold: 0.25,
		})
	}, [])

	const url = `${process.env.REACT_APP_API}/projects`
	const [apiData, dataProcessed] = useApiData(url)
	const { data } = apiData

	const {
		TComp: { P, PSmall },
		SkillIconBox,
	} = CIndex

	return (
		<HomePageContainer>
			<div
				className="intro-text text-box"
				data-sal="fade"
				data-sal-duration="800"
			>
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
			<BgImgBox
				className="img-box"
				bgImg={Images.profile}
				data-sal="fade"
				data-sal-duration="800"
			></BgImgBox>
			<div className="text-box page-desc" data-sal="fade" data-sal-delay="200">
				<PSmall>
					This web page was built using the MERN stack and deployed using a
					virtual private server (VPS) with Amazon Web Services (AWS). I built a
					simple framework on top of React to help me quickly develop this UI
					and any others in the future.
				</PSmall>
			</div>
			<div
				className="text-box list-header"
				data-sal="fade"
				data-sal-delay="200"
			>
				<P>My skills include but are not limited to...</P>
			</div>
			<ul>
				{iconData.map((el, i) => (
					<li key={i} data-sal="fade" data-sal-duration="800">
						<SkillIconBox
							skillClassName="skill-img"
							className="icon-box"
							name={el.name}
							img={el.img}
						/>
					</li>
				))}
			</ul>
			<div
				className="text-box project-desc"
				data-sal="fade"
				data-sal-delay="200"
			>
				<PSmall>
					In my years of study, I have tried lots of things in an effort to
					broaden my skill set. I enjoy web development a lot, and I am
					following my self-directed passion for it into my career.
				</PSmall>
				<PSmall>Here is a sampling of the work I've done:</PSmall>
			</div>
			<div className="projects-sample" data-sal="fade" data-sal-delay="200">
				{dataProcessed &&
					Object.keys(data).map((project, i) => (
						<div class="project-link">
							<Link to={`/portfolio/${data[project].slug}`}>
								{data[project].name}
							</Link>
						</div>
					))}
			</div>
			<div className="text-box cta" data-sal="fade" data-sal-delay="200">
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
