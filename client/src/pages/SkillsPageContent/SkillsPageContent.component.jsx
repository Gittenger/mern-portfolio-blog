import React from 'react'

import NodeImg from '../../assets/img/skills/node.png'
import GitImg from '../../assets/img/skills/git.png'
import ReduxImg from '../../assets/img/skills/redux.png'
import TuxImg from '../../assets/img/skills/tux.png'
import AwsImg from '../../assets/img/skills/aws.png'
import PythonImg from '../../assets/img/skills/python.png'
import { SkillsPageContentContainer } from './SkillsPageContent.styles'

const SkillsPageContent = () => {
  return (
    <SkillsPageContentContainer>
      {/* Make accordion of skill icons, */}
      {/* with table of contents allowing to skip to details at bottom */}
      {/* In details section, explain what I'm capable of and some things I've done */}
      {/* Have a setup section to explain my development environment */}
      <ul>
        <li>
          <img src={TuxImg} />
        </li>
        <li>
          <img src={NodeImg} />
        </li>
        <li>
          <img src={GitImg} />
        </li>
        <li>
          <img src={ReduxImg} />
        </li>
        <li>
          <img src={AwsImg} />
        </li>
        <li>
          <img src={PythonImg} />
        </li>
      </ul>
    </SkillsPageContentContainer>
  )
}

export default SkillsPageContent
