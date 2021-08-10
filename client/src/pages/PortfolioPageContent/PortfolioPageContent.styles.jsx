import styled from 'styled-components'
import Carousel from 'react-gallery-carousel'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { laptopL, laptopM, desktop, tabletMM, mobileMM, mobileS } = device

export const PortfolioPageContainer = styled.div`
  ${cssIndex.flexCenterCol}
  color: black;
  margin-bottom: 9rem;

  ${tabletMM} {
    padding-top: 3rem;
  }
`

export const StyledCarousel = styled(Carousel)`
  height: 800px;
  width: 1270px;

  ${desktop} {
    height: 775px;
    width: 1165px;
  }

  ${laptopL} {
    height: 750px;
    width: 1100px;
  }

  ${laptopM} {
    height: 700px;
    width: 95%;
  }

  ${tabletMM} {
    height: 550px;
  }

  ${mobileMM} {
    height: 450px;
  }

  ${mobileS} {
    height: 390px;
  }
`
