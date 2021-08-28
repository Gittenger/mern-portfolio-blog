import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const ResumePageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}
  color: white;

  & > a:link,
  & > a:visited {
    color: var(--main);
  }
`
