import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { laptopM, tabletMM, mobileMM, tabletLand } = device

export const EditPostContainer = styled.div`
  ${cssIndex.flexCenterCol}
`

export const EditContainer = styled.div`
  ${cssIndex.flexCenterCol}
  width: 100%;

  .menu-button {
    margin-top: 2rem;
    text-decoration: underline;
    color: white;
    background: none;
    border: none;
    padding: 0.6rem;
    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: var(--main);
    }
  }

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
      margin-bottom: 1.5rem;
    }

    textarea {
      margin-bottom: 1rem;
      padding: 0.625rem;
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

    ${laptopM} {
      width: 50%;
    }

    ${tabletMM} {
      width: 70%;
    }

    ${mobileMM} {
      width: 85%;
    }
  }
`

export const OverviewContainer = styled.div`
  width: 80%;

  .menu-button {
    margin-bottom: 2rem;
    text-decoration: underline;
    color: white;
    background: none;
    border: none;
    padding: 0.6rem;
    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: var(--main);
    }
  }

  .delete-prompt {
    display: none;
    opacity: 0;
    transition: opacity 0.4s;

    &.active {
      opacity: 1;
    }
  }

  ${tabletMM} {
    width: 90%;
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5rem;

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
      border: 0;
      font-size: 1.7rem;

      &:hover {
        color: var(--grey);
        background-color: var(--main);
      }
    }

    ${tabletLand} {
      flex-direction: column;
      margin-bottom: 2.5rem;

      & > div {
        width: 100%;
      }

      .create-link,
      .delete-button {
        margin-bottom: 0.8rem;
        width: 100%;
      }
    }
  }

  ul {
    li {
      margin-bottom: 1rem;
    }

    & > li:not(:last-child) {
      border-bottom: white solid 1px;
      padding-bottom: 1rem;
    }

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
      text-align: center;
    }

    ${laptopM} {
      .name {
        width: 40%;
      }

      .delete-button {
        width: 23%;
      }

      .edit-button {
        width: 23%;
      }
    }

    ${tabletLand} {
      .name {
        width: 35%;
      }

      .delete-button {
        width: 28%;
      }

      .edit-button {
        width: 28%;
      }
    }

    ${mobileMM} {
      .name {
        width: 100%;
        text-align: center;
        margin-bottom: 1.5rem;
      }

      .delete-button {
        width: 45%;
      }

      .edit-button {
        width: 45%;
      }
    }
    li {
      margin-bottom: 2rem;
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
    cursor: pointer;
  }

  ${mobileMM} {
    flex-wrap: wrap;
  }
`
