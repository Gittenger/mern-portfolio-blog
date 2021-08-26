import styled from 'styled-components'

import { cssIndex, device, deviceMin } from '../../styles/css/utils.styles.js'
const { minLaptopS } = deviceMin
const { laptopS, tabletM, mobileM } = device

export const SkillsPageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  padding: 3rem 0;
  width: 100%;

  .page-title {
    h1 {
      font-family: var(--fontHeadingSpecial);
      font-style: italic;
      margin-bottom: 2rem;
      background-image: linear-gradient(
        210deg,
        var(--main) 0%,
        var(--black) 200%
      );
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      letter-spacing: -2px;
      background-size: 100%;
    }
  }
`

export const SkillCardsContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100%;

  & > ul {
    display: grid;
    min-width: 55%;
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
    justify-content: center;
    justify-items: center;

    & > li {
      width: 100%;
    }
  }

  ${minLaptopS} {
    width: 55%;
  }

  ${laptopS} {
    width: 75%;
  }

  ${tabletM} {
    width: 85%;
  }

  ${mobileM} {
    width: 95%;
  }
`
