import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { laptopXS, laptopL, tabletMM, tabletS } = device

export const PortfolioDetailsContainer = styled.div`
  ${cssIndex.flexCenterCol}
  ${cssIndex.keyFrames.fadein}
  width: 100%;

  ${tabletMM} {
    padding-top: 4rem;
  }

  & > .title {
    margin-bottom: 2rem;
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
    margin-bottom: 6rem;

    ${laptopXS} {
      width: 70%
    }

    p {
    text-align: left;
    line-height: 1.5;
    margin-bottom: 3rem;
    }

    h2,
    h3 {
      margin-top: 4rem;
    }

    pre  {
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

  & > .project-link {
      color: var(--main);
      transition: color 0.3s;

      &:hover {
        color: royalblue;
        transition: color 0.3s;
      }
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
      max-width: 100px;

      &.is-svg {
        width: 100px;
        height: 100px;
      }
    }

    ${laptopL} {
      width: 65%;
    }

    ${laptopXS} {
      width: 80%;
    }

    ${tabletMM} {
      width: 84%;
      img {
        max-width: 85px;

        &.is-svg {
          width: 85px;
          width: 100px;
        }
      }
    }

    ${tabletS} {
    flex-direction: column;
    margin-top: 5rem;

    li:not(:last-child) {
      margin-bottom: 3rem;
      }
    }
  }

  & > .demo-section {
    margin-top: 5rem;
  }
`
