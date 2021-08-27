import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import CIndex from '../../components/components.index.js'
import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

import ProjectsContext from '../../contexts/ProjectsContext.js'

import GatsbyImg from '../../assets/img/skills/gatsby.png'
import NodeImg from '../../assets/img/skills/node.png'
import CSS3Img from '../../assets/img/skills/css3.png'
import Html5Img from '../../assets/img/skills/html5.png'
import ReactImg from '../../assets/img/skills/svg/react.svg'
import NextjsImg from '../../assets/img/skills/svg/nextjs.svg'
import PugImg from '../../assets/img/skills/svg/pug.svg'

const PortfolioDetails = () => {
	const {
		TComp: { PSmall },
	} = CIndex
	const [values, setValues] = useState({
		name: '',
		descriptionLong: '',
		link: '',
		techStack: [],
	})
	const { projectName } = useParams()
	const { urls, setUrlCache } = useContext(ProjectsContext)
	const url = `${process.env.REACT_APP_API}/projects/${projectName}`

	useEffect(() => {
		if (localStorage.getItem(url)) {
			setValues({ ...JSON.parse(localStorage.getItem(url)) })
			setUrlCache(url, JSON.parse(localStorage.getItem(url)))
		} else if (urls[url]) {
			setValues({ ...urls[url] })
		} else {
			fetch(url, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(res => {
					setUrlCache(url, res.data)
					localStorage.setItem(url, JSON.stringify(res.data))
					setValues({ ...res.data })
				})
				.catch(err => console.error(err))
		}
	}, [urls[url], localStorage.getItem(url)])

	const { name, descriptionLong, link, techStack } = values

	return (
		<PortfolioDetailsContainer>
			<PSmall>{name}</PSmall>
			<PSmall>{descriptionLong}</PSmall>
			<a href={link}>Link to project</a>
			<ul>
				{techStack.map(el => {
					const elLow = el.toLowerCase()
					return (
						<li>
							<img
								src={
									elLow.toLowerCase() === 'gatsby'
										? GatsbyImg
										: elLow === 'reactjs'
										? ReactImg
										: elLow === 'css3'
										? CSS3Img
										: elLow === 'nodejs'
										? NodeImg
										: elLow === 'html5'
										? Html5Img
										: elLow === 'nextjs'
										? NextjsImg
										: elLow === 'pug'
										? PugImg
										: ReactImg
								}
								alt=""
							/>
						</li>
					)
				})}
			</ul>
		</PortfolioDetailsContainer>
	)
}

export default PortfolioDetails
