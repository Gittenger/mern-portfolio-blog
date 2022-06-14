import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletM, laptopM, laptopS, tabletS, mobileS } = device

export const ResumePageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  color: white;
  width: 100%;

  h1 {
    margin-bottom: 2rem;
  }

  // outer box
  & > .resume-links {
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

  .certs {
    ${cssIndex.flexCenterCol}
    margin-top: 10rem;
    width: 100%;

    // title
    & > h2 {
    }

    // certs-container
    & > div {
      width: 80%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      justify-items: center;

      // cert box
      & > div {
        h2 {
          --scale: 0.5;
          white-space: normal;
          height: 80px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        // img-box
        & > div {
          height: 25rem;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 100%;
          }
        }
      }

      ${laptopM} {
        width: 100%;
      }

      ${laptopS} {
        grid-template-columns: 1fr;
      }

      ${tabletS} {
        // img-box
        & > div > div {
          height: 20rem;
        }
      }

      ${mobileS} {
        // img-box
        & > div > div {
          height: 13rem;
        }
      }
    }
  }
`
