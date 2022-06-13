import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { tabletMM, mobileM } = device

export const BlogDetailsContainer = styled.div`
  ${cssIndex.flexCenterCol}
  align-items: flex-start;
  width: 70%;
  ${cssIndex.keyFrames.fadein}

  & > h2 {
    white-space: normal;
  }

  ${tabletMM} {
    width: 90%;
  }

  pre {
    width: 100%;
  }

  & > p > code {
    background: #282a36;
    color: #f1fa8c;
    padding: 5px;
  }

  & > pre > div > code {
    width: 85%;
  }

  & > p {
    text-align: left;
    margin-bottom: 0;
  }

  & > p + * {
    margin-top: 0.8rem;
  }

  & > p + pre {
    margin-top: 0;
  }

  pre {
    margin-bottom: 0.8rem;
  }

  ${tabletMM} {
    pre > div {
      padding: 0.8em !important;
      line-height: 1.1 !important;

      & code {
        line-height: 1.1 !important;

        span {
          font-size: 0.85em;
        }
      }
    }

    // embedded code
    & > p > code {
      padding: 1px;
    }
  }

  ${mobileM} {
    pre > div code span {
      font-size: 0.6em;
    }
  }
`
