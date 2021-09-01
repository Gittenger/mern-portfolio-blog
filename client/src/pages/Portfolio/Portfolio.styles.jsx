import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const PortfolioPageContainer = styled.div`
  ${cssIndex.flexCenterCol}
`

export const PortfolioCardList = styled.ul`
  ${cssIndex.keyFrames.fadein}
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`
