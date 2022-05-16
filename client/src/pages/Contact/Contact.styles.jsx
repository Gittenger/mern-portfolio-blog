import styled from 'styled-components'
import { PSmallStyles } from '../../components/typography/typography.components.js'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletLand, mobileMM, mobileM, mobileS } = device

export const ContactPageContainer = styled.div`
  ${cssIndex.flexCenter}
  flex-direction: column;
  width: 100%;
  padding: 0 0 15rem;
  ${cssIndex.keyFrames.fadein}

  ${tabletLand} {
    padding: 2rem 0 7rem;
  }

  ${mobileMM} {
    padding: 1rem 0 5rem;
  }

  ${mobileS} {
    padding: 1rem 0 3rem;
  }
`

export const ContactTempBox = styled.div`
  ${cssIndex.flexCenterCol}

  a,
  a:visited,
  a:link {
    color: var(--main);

    &:hover {
      color: royalblue;
    }
  }

  p {
    --scale: 0.55;
  }
`
