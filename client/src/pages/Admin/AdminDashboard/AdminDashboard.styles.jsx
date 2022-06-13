import styled from 'styled-components'
import { cssIndex, device } from '../../../styles/css/utils.styles.js'

const { tabletMM, tabletS, tabletLand, laptopM } = device

export const AdminDashboardContainer = styled.div`
  ${cssIndex.flexCenterCol}
  justify-content: flex-start;
  color: var(--white);
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: var(--m-L);

  & > h2 {
    margin-top: var(--m-S);
    margin-bottom: var(--m-S);
  }
`

export const ButtonsBox = styled.div`
  background-color: var(--blackLight);
  min-width: 80%;
  padding: 3rem;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
    justify-items: center;
    align-items: center;
    grid-gap: 1.5rem;
  }

  li {
    width: 50%;
  }

  ${laptopM} {
    li {
      width: 70%;
    }
  }

  ${tabletLand} {
    padding: 1.5rem;

    li {
      width: 90%;
    }
  }

  ${tabletS} {
    padding: 3rem;
    ul {
      grid-template-columns: 1fr;
    }

    li {
      width: 100%;
    }
  }

  // link
  a,
  a:link,
  a:visited {
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    cursor: pointer;
    margin-right: var(--m-XS);
    padding: 0.7rem;
    background-color: var(--grey);
    color: var(--black);
    transition: all 0.3s;
  }

  a:hover {
    color: var(--grey);
    background-color: var(--main);
  }
`

export const Links = styled.div`
  ${cssIndex.flexCenterCol}
  padding-top: var(--m-M);
  width: 100%;

  & > ul {
    width: 90%;

    ${tabletMM} {
      width: 60%;
    }
  }

  // link
  a,
  a:link,
  a:visited,
  button {
    white-space: nowrap;
    cursor: pointer;
    padding: 0.7rem;
    background-color: var(--grey);
    color: var(--black);
    transition: all 0.3s;
    width: 100%;
    height: 100%;
  }

  a:hover,
  button:hover {
    color: var(--grey);
    background-color: var(--main);
  }

  button {
    border: none;
    font-family: var(--fontMain);
    font-size: 1.7rem;
  }

  li {
    width: 100%;
    width: 17rem;
    height: 5rem;
    position: relative;
    ${cssIndex.flexCenter}

    a, button {
      ${cssIndex.flexCenter}
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0.9em;
    }
  }
`

export const RowOne = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-gap: 4.5rem;
  justify-content: center;
  align-content: center;
  justify-items: center;
  margin-bottom: var(--m-L);
`

export const RowTwo = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 4.5rem;
  justify-items: center;
  justify-content: center;
  padding-top: var(--m-M);
`
