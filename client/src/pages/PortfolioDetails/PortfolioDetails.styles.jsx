import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { laptopXS, laptopL, tabletMM, tabletS, mobileM, tabletLand } = device

export const PortfolioDetailsContainer = styled.div`
  ${cssIndex.flexCenterCol}
  ${cssIndex.keyFrames.fadein}
  width: 100%;

  ${tabletMM} {
    padding-top: 4rem;
  }

  & > .title {
    margin-bottom: 2rem;
    white-space: normal;
  }

  & > .gif {
    margin-bottom: 8rem;

    ${tabletMM} {
      max-width: 90%;
      margin-bottom: 4rem;
    }
  }

  & > .description-long {
    width: 55%;
    text-align: left;
    margin-bottom: 3.8rem;

    ${laptopXS} {
      width: 70%;
    }

    ${tabletMM} {
      margin-bottom: 2.4rem;
    }

    p {
      text-align: left;
      line-height: 1.5;
      margin-bottom: 3rem;
    }

    h2,
    h3 {
      margin-top: 4rem;
      white-space: normal;

      ${mobileM} {
        margin-top: 3rem;
      }
    }

    pre {
      width: 100%;
    }

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

  & > .links {
    ${cssIndex.flexCenter}
    margin-bottom: 5rem;

    & > *:not(:last-child) {
      margin-right: 2rem;
      margin-bottom: 0;
    }

    & > .text-link {
      color: var(--main);
      text-decoration: underline;
      transition: color 0.3s;

      &:hover {
        color: royalblue;
        transition: color 0.3s;
      }
    }

    & > .icon-link {
      svg {
        ${cssIndex.flexCenterCol}
        width: 50px;
        height: 50px;
        fill: var(--white);

        & * {
          fill: var(--white) !important;
          transition: all 0.4s;
        }

        &:hover {
          fill: var(--main);

          & * {
            fill: var(--main) !important;
            transition: all 0.4s;
          }
        }
      }

      ${tabletMM} {
        svg {
          width: 35px;
          height: 35px;
        }
      }
    }

    ${tabletMM} {
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-left: 7rem;

      & > *:not(:last-child) {
        margin: 1rem 3rem;
      }

      & > .text-link:first-of-type {
        // text-align: center;
        width: 100%;
      }
    }

    ${mobileM} {
      padding: 1rem;
      font-size: 1.4rem;
    }
  }

  & > .tech-stack {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;

    width: 50%;
    min-width: 40%;

    img {
      max-width: 90px;

      &.is-svg {
        width: 100px;
      }
    }

    ${laptopL} {
      width: 70%;
      img,
      img.is-svg {
        max-width: 80px;
      }
    }

    ${laptopXS} {
      width: 85%;
    }

    ${tabletLand} {
      flex-wrap: wrap;
      img,
      img.is-svg {
        max-width: 60px;
      }
    }

    ${tabletMM} {
      margin-top: 0;
      img,
      img.is-svg {
        max-width: 50px;
      }
    }

    ${tabletS} {
      flex-wrap: wrap;
      width: 90%;

      img,
      img.is-svg {
        max-width: 70px;
      }

      li {
        margin: 1.5rem 1rem;
      }
    }
  }

  & > .demo-section {
    ${cssIndex.flexCenterCol}
    width: 100%;
    margin-top: 5rem;

    .iframe {
      ${tabletMM} {
        width: 90%;
      }

      ${mobileM} {
        height: 265px;
      }
    }
  }
`
