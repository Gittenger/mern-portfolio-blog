import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const PortfolioDetailsContainer = styled.div`
  ${cssIndex.flexCenterCol}
  ${cssIndex.keyFrames.fadein}

  & > ul {
    img {
      max-width: 100px;
    }
  }

  & > .description-long {
    ul > li {
      color: var(--white);
      list-style: disc;
    }

    & > p > code {
      background: #282a36;
      color: #f1fa8c;
      padding: 5px;
    }

    a:link,
    a:visited {
      color: var(--main);
      transition: color 0.3s;

      &:hover {
        color: royalblue;
        transition: color 0.3s;
      }
    }
  }
`
