import React from 'react'
import 'react-gallery-carousel/dist/index.css'

import { CIndex } from '../../components/components.index.js'
import {
	PortfolioPageContainer,
	PortfolioCardList,
} from './PortfolioPageContent.styles'

const Portfolio = () => {
	const { Card } = CIndex
	return (
		<PortfolioPageContainer>
			<PortfolioCardList>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
			</PortfolioCardList>
		</PortfolioPageContainer>
	)
}

export default Portfolio
