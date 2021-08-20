import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const SkillsPageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100%;
`

export const SkillCardsContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100%;

  & > ul {
    display: grid;
    width: 55%;
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
    justify-content: center;
    justify-items: center;

    & > li {
      width: 100%;
    }
  }
`
