import React from 'react'
import { useApiData } from '../../utils/hooks.js'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import CIndex from '../../components/components.index.js'
import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

import leo from '../../assets/gif/leo.gif'
import poke from '../../assets/gif/poke.gif'
import { ReactComponent as GithubLogo } from '../../assets/icons/github.svg'

const PortfolioDetails = () => {
	const { slug } = useParams()

	const url = `${process.env.REACT_APP_API}/projects`
	const [apiData, dataProcessed] = useApiData(url)

	const renderers = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '')
			return !inline && match ? (
				<Prism
					style={dracula}
					language={match[1]}
					PreTag="div"
					children={String(children).replace(/\n$/, '')}
					{...props}
				/>
			) : inline ? (
				<code className={className} {...props}>
					{children}
				</code>
			) : (
				<Prism
					style={dracula}
					language="shell"
					children={String(children).replace(/\n$/, '')}
					{...props}
				/>
			)
		},
		p({ ...props }) {
			return <PSmall {...props} />
		},
		h1({ ...props }) {
			return <H1 {...props} />
		},
		h2({ ...props }) {
			return <H2 {...props} />
		},
		h3({ ...props }) {
			return <H3 {...props} />
		},
	}

	const {
		TComp: { PSmall, H1, H3, H2 },
		SkillImage,
		YtEmbed,
		Spinner,
	} = CIndex

	const { data } = apiData

	return dataProcessed ? (
		<PortfolioDetailsContainer>
			<H1 className="title">{data[slug].name}</H1>
			<img src={slug === 'fantastic-flames' ? leo : poke} alt="" className="gif" />
			<div className="links">
				<a className="text-link" href={data[slug].link} target="_blank">
					Link to project
				</a>
				<a className="text-link" href={data[slug].github} target="_blank">
					GitHub Link
				</a>
				<a className="icon-link" href={data[slug].github} target="_blank">
					<GithubLogo />
				</a>
			</div>
			<div className="description-long">
				<ReactMarkdown
					components={renderers}
					children={data[slug].descriptionLong}
				/>
			</div>
			<ul className="tech-stack">
				{data[slug].techStack.map((el, i) => {
					const elLow = el.toLowerCase()
					return (
						<li key={i}>
							<SkillImage key={i} img={elLow} className="skill-img" />
						</li>
					)
				})}
			</ul>
			<div className="demo-section">
				<H2>Project Demo:</H2>
				<YtEmbed linkId={data[slug].youtubeId} className="iframe" />
			</div>
		</PortfolioDetailsContainer>
	) : (
		<Spinner />
	)
}

export default PortfolioDetails
