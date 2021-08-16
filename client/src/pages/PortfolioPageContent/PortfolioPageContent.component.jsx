import React from 'react'

import { CIndex } from '../../components/components.index.js'
import {
	PortfolioPageContainer,
	PortfolioCardList,
} from './PortfolioPageContent.styles'
import DesignOne from '../../assets/img/design-1.png'
import DesignTwo from '../../assets/img/design-2.png'
import DesignThree from '../../assets/img/design-3.png'

const Portfolio = () => {
	const { Card } = CIndex
	return (
		<PortfolioPageContainer>
			<PortfolioCardList>
				<li>
					<Card
						title="Fantastic Flames"
						description="A MERN SPA marketing web page built for a local entertainment business"
						anchor="portfolio/fantastic-flames"
						coverImg={DesignOne}
					/>
				</li>
				<li>
					<Card
						title="Fantastic Flames"
						description="A MERN SPA marketing web page built for a local entertainment business"
						anchor="portfolio/fantastic-flames"
						bgColor="green"
						coverImg={DesignTwo}
					/>
				</li>
				<li>
					<Card
						title="Fantastic Flames"
						description="A MERN SPA marketing web page built for a local entertainment business"
						anchor="portfolio/fantastic-flames"
						bgColor="blue"
						coverImg={DesignThree}
					/>
				</li>
			</PortfolioCardList>
		</PortfolioPageContainer>
	)
}

export default Portfolio
