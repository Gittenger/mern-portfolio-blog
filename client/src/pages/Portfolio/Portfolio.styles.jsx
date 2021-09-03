import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { tabletLand, tabletMM } = device

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

  ${tabletLand} {
    grid-template-columns: 1fr;
  }

  ${tabletMM} {
    justify-content: center;
    justify-items: center;
    width: 90%;

    & > li {
      display: grid;
      place-items: center;
      width: 100%;
    }
  }
`
