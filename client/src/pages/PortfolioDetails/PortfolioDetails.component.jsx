import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import CIndex from '../../components/components.index.js'
import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

import UrlsContext from '../../contexts/UrlsContext.js'

import Images from '../../assets/img/img-index.js'

const PortfolioDetails = () => {
	const {
		TComp: { PSmall },
	} = CIndex
	const {
		skills: { svg, png },
	} = Images
	const [values, setValues] = useState({
		name: '',
		descriptionLong: '',
		link: '',
		techStack: [],
	})
	const { projectName } = useParams()
	const { urls, setUrlsContext } = useContext(UrlsContext)
	const url = `${process.env.REACT_APP_API}/projects/${projectName}`

	useEffect(() => {
		if (localStorage.getItem(url)) {
			setValues({ ...JSON.parse(localStorage.getItem(url)) })
			setUrlsContext(url, JSON.parse(localStorage.getItem(url)))
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
					setUrlsContext(url, res.data)
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
				{techStack.map((el, i) => {
					const elLow = el.toLowerCase()
					return (
						<li key={i}>
							<img
								src={
									elLow === 'gatsby'
										? png.gatsby
										: elLow === 'reactjs'
										? svg.react
										: elLow === 'css3'
										? png.css
										: elLow === 'nodejs'
										? png.node
										: elLow === 'html5'
										? png.html
										: elLow === 'nextjs'
										? svg.nextjs
										: elLow === 'pug'
										? svg.pug
										: svg.react
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
