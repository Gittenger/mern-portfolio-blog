import { css } from 'styled-components'

import fontsIndex from '../../assets/fonts/index'
const { georama, pressStart } = fontsIndex

export const fontVars = {
  fontMain: css`
    --fontMain: 'Barlow', sans-serif;
    --fontHeading: 'Kanit', sans-serif;
    --fontHeadingSpecial: '${pressStart.name}', sans-serif;
    --globalScale: 1;
  `,
}

export default fontVars
