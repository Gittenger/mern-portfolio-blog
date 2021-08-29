import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const ResumePageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  color: white;

  button {
    background: none;
    border: none;
    color: var(--main);
    text-decoration: underline;
    font-size: 1.2em;
    cursor: pointer;
  }
`
