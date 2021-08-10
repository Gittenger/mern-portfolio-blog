import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletMM } = device

export const SkillsPageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}

  ul {
    max-width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 300px;
    li {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

  ${tabletMM} {
    padding-top: 3rem;
    ul {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-auto-rows: 200px;
      grid-row-gap: 4rem;
    }
  }
`
