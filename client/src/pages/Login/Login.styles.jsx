import styled from 'styled-components'
import { PSmallStyles } from '../../components/typography/typography.components.js'
import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { tabletMM } = device

export const LoginPageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100vw;
`

export const Form = styled.form`
  ${cssIndex.flexCenterCol}

  textarea,
  input {
    font-family: inherit;
    border-radius: 0.3rem;
  }

  button {
    margin-top: var(--m-XXS);
  }

  & > div {
    &:not(:last-child) {
      margin-bottom: var(--m-XXS);
    }

    label {
      ${PSmallStyles}
      text-align: right;
      justify-self: end;
      margin-right: 2rem;
    }

    input {
      justify-self: start;
      width: 100%;
      font-size: 1.4rem;
      margin: 0;
      padding: 0 0.5rem;
      color: black;
    }

    ${tabletMM} {
      label {
        justify-self: end;
        margin-right: 1rem;
      }

      input {
        min-width: 14rem;
        padding: 0.4rem 1rem;
        margin-bottom: 1rem;
      }
    }
  }
`

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 5.5fr;
  justify-content: center;
  align-content: center;
  justify-items: center;
  overflow: hidden;

  ${tabletMM} {
    grid-template-columns: 1fr;
  }
`
