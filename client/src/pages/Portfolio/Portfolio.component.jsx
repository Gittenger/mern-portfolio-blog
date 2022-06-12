import React, { useState, useEffect } from 'react'
import { useApiData, useSortedData } from '../../utils/hooks.js'

import CIndex from '../../components/components.index.js'
import { PortfolioPageContainer, PortfolioCardList } from './Portfolio.styles'

const Portfolio = () => {
  const { ProjectCard, Spinner } = CIndex
  const [sortedData, setSortedData] = useState([])

  const url = `${process.env.REACT_APP_API}/projects`
  const [apiData, dataProcessed] = useApiData(url)

  const { data } = apiData

  useEffect(() => {
    const order = [
      'fantastic-flames',
      'pokedex',
      'frontend-mentor-projects',
      'mern-portfolio-site',
      'mern-template-demo',
      'art-shoppe',
      'natours',
      'mock-portfolio',
      'javascript-30',
    ]

    const dataKeys = Object.keys(data)

    const itemPositions = {}
    for (const [index, name] of order.entries()) {
      itemPositions[name] = index
    }

    const sorted = dataKeys
      .sort((a, b) => itemPositions[a] - itemPositions[b])
      .map((name) => {
        return { ...data[name] }
      })

    setSortedData(sorted)
  }, [data])

  return (
    <PortfolioPageContainer>
      <PortfolioCardList>
        {dataProcessed ? (
          sortedData.map((project, i) => (
            <li key={i}>
              <ProjectCard
                title={project.name}
                description={project.description}
                anchor={`portfolio/${project.slug}`}
                coverImg={project.slug}
              />
            </li>
          ))
        ) : (
          <Spinner />
        )}
      </PortfolioCardList>
    </PortfolioPageContainer>
  )
}

export default Portfolio
