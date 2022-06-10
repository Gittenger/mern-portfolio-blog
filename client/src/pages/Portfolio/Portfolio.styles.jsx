import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { tabletLand, tabletMM, tabletM } = device

export const PortfolioPageContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100%;
`

export const PortfolioCardList = styled.ul`
  ${cssIndex.keyFrames.fadein}
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  width: 100%;

  & > li {
    width: 100%;
    display: grid;
  }

  & > li:nth-child(even) {
    place-items: start;
  }

  & > li:nth-child(odd) {
    place-items: end;
  }

  ${tabletLand} {
    grid-template-columns: 1fr;

    & > li,
    & > li:nth-child(odd),
    & > li:nth-child(even) {
      place-items: center;
    }
  }

  ${tabletMM} {
    justify-content: center;
    justify-items: center;
    width: 90%;

    & > li,
    & > li:nth-child(odd),
    & > li:nth-child(even) {
      place-items: center;
    }
  }
`
