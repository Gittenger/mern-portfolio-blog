import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { laptopM, tabletMM, mobileMM } = device

export const EditPostContainer = styled.div`
  ${cssIndex.flexCenterCol}
`

export const EditContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100%;

  form {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    input,
    textarea {
      width: 100%;
    }

    input {
      padding: 0.625rem;
    }

    input {
      margin-bottom: 1.5rem;
    }

    textarea {
      margin-bottom: 1rem;
    }

    button {
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

      &:hover {
        color: var(--grey);
        background-color: var(--main);
      }
    }
  }

  ${laptopM} {
    form {
      width: 50%;
    }
  }

  ${tabletMM} {
    form {
      width: 70%;
    }
  }

  ${mobileMM} {
    form {
      width: 85%;
    }
  }
`

export const OverviewContainer = styled.div`
  width: 80%;

  .delete-prompt {
    display: none;
    opacity: 0;
    transition: opacity 0.4s;

    &.active {
      opacity: 1;
    }
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .create-link,
    .delete-button {
      display: block;
      text-align: center;
      width: 22rem;
      height: 100%;
      white-space: nowrap;
      cursor: pointer;
      padding: 0.7rem;
      background-color: var(--grey);
      color: var(--black);
      transition: all 0.3s;

      &:hover {
        color: var(--grey);
        background-color: var(--main);
      }
    }
  }

  ul {
    li > div {
      width: 100%;
    }

    .name {
      width: 45%;
      text-align: left;
    }

    .delete-button {
      width: 15%;
    }

    .edit-button {
      width: 15%;
    }
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 0;
  }

  button {
    margin-left: 0.7rem;
    cursor: pointer;
  }
`
