import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletM } = device

export const ResumePageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  color: white;

  h1 {
    margin-bottom: 2rem;
  }

  & > div {
    ${cssIndex.flexCenter}
    align-items: flex-start;

    ${tabletM} {
      ${cssIndex.flexCenterCol}
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 300px;

      ${tabletM} {
        margin: 1rem 0;
        width: 220px;
      }

      & > * {
        text-align: center;
      }
    }

    button,
    a,
    a:visited,
    a:link {
      background: none;
      border: none;
      color: var(--main);
      text-decoration: underline;
      font-size: 1.2em;
      cursor: pointer;

      &:hover {
        color: royalblue;
      }
    }
  }
`
