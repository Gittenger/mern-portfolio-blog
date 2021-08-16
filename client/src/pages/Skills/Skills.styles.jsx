import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletMM, mobileS } = device

export const SkillsPageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}

  & > div {
    ${cssIndex.flexCenterCol}
  }

  ul {
    display: none;
    max-width: 85%;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: 250px;
    grid-row-gap: 4rem;
    grid-column-gap: 3rem;
    justify-content: center;
    justify-items: center;
    li {
      ${cssIndex.flexCenterCol}
      width: 100%;
      img {
        max-width: 100%;
        max-height: 100%;

        &.aws-img {
          max-width: 120%;
          max-height: 120%;
        }
      }
    }

    &.active {
      display: grid;
    }
  }

  ${tabletMM} {
    padding-top: 3rem;
    ul {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-auto-rows: 200px;
      grid-row-gap: 5rem;
    }
  }

  ${mobileS} {
    ul {
      grid-template-columns: 190px;
      grid-template-rows: 180px;
      grid-row-gap: 3rem;
    }
  }
`
