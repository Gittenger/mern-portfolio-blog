import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cssIndex, device } from '../../../styles/css/utils.styles.js'
const { desktop, laptopM, laptopS, tabletLand, tabletMM, mobileXS } = device

export const CardContainer = styled.div`
  --cardWidth: 650px;
  --cardHeight: 800px;

  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30% 1fr;
  justify-content: center;
  align-content: start;
  align-items: center;
  justify-items: center;
  background: var(--blackDark);
  width: var(--cardWidth);
  height: var(--cardHeight);
  border-radius: 10px;
  padding: 2rem;

  & > div.text-box {
    ${cssIndex.flexCenterCol}
    width: var(--cardWidth);
    padding: 2rem;

    h2 {
      --scale: 0.6;
      white-space: normal;
    }

    p {
      --scale: 0.5;
    }
  }

  ${desktop} {
    --cardWidth: 600px;
    --cardHeight: 730px;
  }

  ${laptopM} {
    --cardWidth: 500px;
    --cardHeight: 650px;
  }

  ${laptopS} {
    --cardWidth: 420px;
    --cardHeight: 550px;
  }

  ${tabletLand} {
    --cardWidth: 730px;
    --cardHeight: 550px;
  }

  ${tabletMM} {
    --cardWidth: 100%;
    --cardHeight: 490px;
  }

  ${mobileXS} {
    grid-template-rows: 50% 1fr;

    & > div.text-box {
      ${cssIndex.flexCenterCol}
      width: var(--cardWidth);
      padding: 1rem;

      h2 {
        --scale: 0.6;
      }

      // // p {
      //   --scale: 0.01;
      // }
    }
  }
`

export const ImgBox = styled.div`
  ${cssIndex.flexCenterCol}
  width: 90%;
  height: 100%;
  background-image: ${({ bgImg }) => `url('${bgImg}')`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const Overlay = styled(Link)`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  ${cssIndex.flexCenterCol}
  background: rgba(144, 150, 150, 0%);
  width: var(--cardWidth);
  height: var(--cardHeight);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  ${tabletMM} {
    width: 100%;
    height: 100%;
  }

  button {
    opacity: 0;
    cursor: pointer;
    background: black;
    color: white;
    transition: all 0.3s;
    padding: 10px;
    border-radius: 10px;
    border-style: none;

    transition: all 0.3s;

    &:hover {
      background: white;
      color: black;
    }
  }

  &.active {
    background: rgba(144, 150, 150, 70%);

    button {
      opacity: 100%;
    }
  }
`
