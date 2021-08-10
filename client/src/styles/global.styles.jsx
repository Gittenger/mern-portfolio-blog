import { createGlobalStyle } from 'styled-components'

import fontFaces from './typography/fontFaces'
import resetCSS from './css/resetCSS.js'

const GlobalStyles = createGlobalStyle`
${fontFaces}
${resetCSS}

body {
	${({ theme: { css } }) => css.flexCenterCol};
    font-size: 1.7rem;
 
    transition: background-color .3s, color .3s;

    ${({ theme: { css } }) => css.scrollBarStyles};
}

#root {
	${({ theme: { css } }) => css.flexCenterCol};
  min-width: 80vw;
    
    /* set font vars in root */
    ${({ theme: { typography } }) => typography.fontVars.fontMain};

   /* Custom Variables */
    /* Colors */
    --main: ${({ theme: { colors } }) => colors.main};
    --white: ${({ theme: { colors } }) => colors.white};
    --grey: ${({ theme: { colors } }) => colors.greyLight};
    --black: ${({ theme: { colors } }) => colors.black};
    --main: ${({ theme: { colors } }) => colors.redDark};

    /* Measurements */
    --bRadSm: ${({ theme: { styles } }) => styles.borderRadiusSm};
    --bRadM: ${({ theme: { styles } }) => styles.borderRadiusM};
    --m-XXXS: ${({ theme: { styles } }) => styles.marginXXXSmall};
    --m-XXS: ${({ theme: { styles } }) => styles.marginXXSmall};
    --m-XS: ${({ theme: { styles } }) => styles.marginXSmall};
    --m-S: ${({ theme: { styles } }) => styles.marginSmall};
    --m-SM: ${({ theme: { styles } }) => styles.marginSmallMedium};
    --m-M: ${({ theme: { styles } }) => styles.marginMedium};
    --m-L: ${({ theme: { styles } }) => styles.marginLarge};

    /* Shadows */
    --shadowSub: ${({ theme: { styles } }) => styles.textShadowSubtitles};
    --shadowTitle: ${({ theme: { styles } }) => styles.textShadowTitle};
    --shadowBoxOne: ${({ theme: { styles } }) => styles.boxShadowFullOne};
    --shadowBoxTwo: ${({ theme: { styles } }) => styles.boxShadowFullTwo};
    --shadowBoxPart: ${({ theme: { styles } }) => styles.boxShadowPartialOne};
    --shadowTitleBox: ${({ theme: { styles } }) => styles.boxShadowTitleBox};

    /* Gradients */
    --gradBg: ${({ theme: { gradient } }) => gradient.bg};
    --gradBgMob: ${({ theme: { gradient } }) => gradient.bgMob};
    --gradFooter: ${({ theme: { gradient } }) => gradient.footer};
    --gradTitle: ${({ theme: { gradient } }) => gradient.title};
    --gradForm: ${({ theme: { gradient } }) => gradient.form};
}

html {
        /* set shared typography styles */
    ${({ theme: { typography } }) => typography.sharedStyles};
}
`

export default GlobalStyles
