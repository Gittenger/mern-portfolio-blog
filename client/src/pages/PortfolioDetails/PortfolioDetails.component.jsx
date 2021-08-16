import React from 'react'
import { useParams } from 'react-router-dom'

import { PortfolioDetailsContainer } from './PortfolioDetails.styles'

const PortfolioDetails = () => {
	const { projectName } = useParams()

	return (
		<PortfolioDetailsContainer>
			Details Page
			<p>{projectName}</p>
		</PortfolioDetailsContainer>
	)
}

export default PortfolioDetails
