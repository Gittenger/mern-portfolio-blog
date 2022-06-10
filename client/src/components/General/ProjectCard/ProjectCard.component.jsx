import React, { useState } from 'react'

import CIndex from '../../components.index'

import { CardContainer, Overlay, ImgBox } from './ProjectCard.styles'
import Images from '../../../assets/img/img-index.js'

const ProjectCard = ({ title, description, anchor, coverImg }) => {
  const [hoverState, setHoverState] = useState(false)

  const handleMouseEnter = () => {
    setHoverState(true)
  }

  const handleMouseLeave = () => {
    setHoverState(false)
  }

  const { projects } = Images
  const {
    TComp: { H2, PSmall },
  } = CIndex

  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Overlay to={anchor} className={hoverState ? 'active' : ''}>
        <button>See Details</button>
      </Overlay>
      <div className="text-box">
        <H2>{title}</H2>
        <PSmall>{description}</PSmall>
      </div>
      <ImgBox bgImg={coverImg ? projects[coverImg] : projects.default}></ImgBox>
    </CardContainer>
  )
}

export default ProjectCard
