import React from 'react'
import { useApiData } from '../../utils/hooks.js'

import CIndex from '../../components/components.index.js'
import { PortfolioPageContainer, PortfolioCardList } from './Portfolio.styles'

const Portfolio = () => {
	const { ProjectCard } = CIndex

	const url = `${process.env.REACT_APP_API}/projects`
	const [apiData, dataProcessed] = useApiData(url)

	const { data } = apiData

	return (
		<PortfolioPageContainer>
			<PortfolioCardList>
				{dataProcessed &&
					Object.keys(data).map((project, i) => (
						<li key={i}>
							<ProjectCard
								title={data[project].name}
								description={data[project].description}
								anchor={`portfolio/${data[project].slug}`}
								coverImg={data[project].slug}
							/>
						</li>
					))}
			</PortfolioCardList>
		</PortfolioPageContainer>
	)
}

export default Portfolio
