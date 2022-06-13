import styled from 'styled-components'

import { cssIndex, device } from '../../../styles/css/utils.styles.js'

import { navStyles } from '../../typography/typography.components.js'

const { tabletS, tabletMM, mobileMM, tabletL } = device

export const NavListContainer = styled.ul`
  ${navStyles}
  ${cssIndex.flexCenter}
	height: 100%;
  width: 100%;

  li {
    ${cssIndex.flexCenter}
    height: 100%;
  }

  ${tabletL} {
    font-size: 1.5rem;
  }

  ${tabletMM} {
    font-size: 1.2rem;
  }

  // small
  ${tabletS} {
    flex-direction: column;
    letter-spacing: 0.35em;
    font-size: 1.4rem;
    padding: 3rem 0;
  }

  ${mobileMM} {
    padding: 3.5rem 0;
  }
`

export const NavLinkBox = styled.div`
  ${cssIndex.flexCenter}
  position: relative;
  z-index: 0;
  height: 100%;

  // link with hover
  a {
    position: relative;
    z-index: 10;
    ${cssIndex.flexCenter}
    padding: 0 1rem;
    height: 100%;

    &:link,
    &:visited {
      color: var(--white);
    }

    ${tabletL} {
      padding: 0 0.5rem;
    }

    ${tabletS} {
      width: 100%;
      height: 100%;
      padding: 2rem 1rem;

      a {
        &.active-page {
          filter: none;
        }
      }
    }

    // effects
    //
    // inverse skew on text
    transform: var(--inverseSkewNav);

    // hover effect
    &:hover + .nav-highlight {
      opacity: 100%;
    }

    // active-page effect
    &.active-page {
      filter: invert(35%);
    }
  }

  // box under link for hover effect
  & > .nav-highlight {
    position: absolute;
    z-index: 0;
    opacity: 0;
    background: var(--main);
    top: 0;
    left: -2px;
    height: 100%;
    width: 100%;
    transform: skew(-3deg);
    transition: all 0.3s;

    &-1 {
      filter: brightness(0.9);
    }
    &-2 {
      filter: brightness(0.82);
    }
    &-3 {
      filter: brightness(0.74);
    }
    &-4 {
      filter: brightness(0.65);
    }
    &-5 {
      filter: brightness(0.57);
    }
    &-6 {
      filter: brightness(0.49);
    }
    &-7 {
      filter: brightness(0.41);
    }
  }
`
