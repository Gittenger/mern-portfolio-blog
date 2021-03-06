import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const BlogPageContentContainer = styled.div`
  ${cssIndex.flexCenterCol}

  a:link, a:visited {
    color: var(--cyan);
    text-decoration: underline;
    transition: color 0.3s;

    &:hover {
      color: royalblue;
    }
  }
`
