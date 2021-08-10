import { css } from 'styled-components'

import fontsIndex from '../../assets/fonts/index'
const { georama } = fontsIndex

export const fontVars = {
	fontMain: css`
		--fontMain: '${georama.name}', sans-serif;
		--fontHeading: '${georama.name}', sans-serif;
		--globalScale: 1;
	`,
}

export default fontVars
