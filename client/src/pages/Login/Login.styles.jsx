import styled from 'styled-components'
import { cssIndex } from '../../styles/css/utils.styles.js'

export const LoginPageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100vw;
`

export const Form = styled.form`
  ${cssIndex.flexCenterCol}
  margin: var(--m-XS) auto;
`

export const Row = styled.div`
  text-align: right;
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 5.5fr;
  justify-content: center;
  align-content: center;
  justify-items: center;
  overflow: hidden;

  textarea,
  input {
    font-family: inherit;
    border-radius: 0.3rem;
  }

  &:not(:last-child) {
    margin-bottom: var(--m-XXS);
  }

  // label
  & > :first-child {
    justify-self: end;
    margin-right: 2rem;
  }

  // input
  & > :last-child {
    justify-self: start;
    width: 60%;
    min-width: 20rem;
    font-size: 1.4rem;
    margin: 0;
    padding: 0 0.5rem;
    color: black;

`
