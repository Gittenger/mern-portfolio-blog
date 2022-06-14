import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletM } = device

export const ResumePageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  color: white;

  h1 {
    margin-bottom: 2rem;
  }

  // outer box
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
      width: 350px;

      ${tabletM} {
        margin: 1rem 0;
        width: 220px;
      }

      & > * {
        text-align: center;
        display: grid;
        place-content: end;
      }

      & > :first-child {
        height: 65px;
        margin-bottom: 0.5rem;
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
