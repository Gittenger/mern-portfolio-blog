import React, { useEffect, useState, useContext } from 'react'
import { useShouldUpdateCache } from '../../utils/hooks.js'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import CIndex from '../../components/components.index.js'
import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

import UrlsContext from '../../contexts/UrlsContext.js'
import leo from '../../assets/gif/leo.gif'

const PortfolioDetails = () => {
	const [values, setValues] = useState({
		name: '',
		descriptionLong: '',
		link: '',
		techStack: [],
	})
	const { slug } = useParams()
	const { urls, setUrlsContext } = useContext(UrlsContext)

	const projectsUrl = `${process.env.REACT_APP_API}/projects`
	const projectUrl = `${process.env.REACT_APP_API}/projects/${slug}`
	const shouldFetchNewApi = useShouldUpdateCache(projectUrl)

	const cachedItem = JSON.parse(localStorage.getItem(projectsUrl)).data[slug]

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		if (cachedItem && shouldFetchNewApi === false) {
			console.log('from local')
			if (!unmounted) {
				setValues(cachedItem)
			}
			setUrlsContext(projectUrl, cachedItem)
		} else if (urls[projectUrl] && shouldFetchNewApi === false) {
			console.log('from context')
			setValues({ ...urls[projectUrl] })
		} else {
			console.log('from api')
			fetch(projectUrl, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setUrlsContext(projectUrl, res.data)
					if (!unmounted) {
						setValues({ ...res.data })
					}
				})
				.catch((err) => console.error(err))
		}

		return () => {
			unmounted = true
		}
	}, [])

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

	const { name, descriptionLong, link, techStack } = values

	const {
		TComp: { PSmall, H1, H3, H2 },
		SkillImage,
		YtEmbed,
	} = CIndex

	return (
		<PortfolioDetailsContainer>
			<H1 className="title">{name}</H1>
			<img src={leo} alt="" className="gif" />
			<div className="description-long">
				<ReactMarkdown components={renderers} children={descriptionLong} />
			</div>
			<a className="project-link" href={link} target="_blank">
				Link to project
			</a>
			<ul className="tech-stack">
				{techStack.map((el, i) => {
					const elLow = el.toLowerCase()
					return (
						<li key={i}>
							<SkillImage key={i} img={elLow} className="skill-img" />
						</li>
					)
				})}
			</ul>
			<H2 className="demo-section">Project Demo:</H2>
			<YtEmbed linkId="FOg5UFERRHA" />
		</PortfolioDetailsContainer>
	)
}

export default PortfolioDetails
