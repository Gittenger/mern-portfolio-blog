import { css } from "styled-components";

import fontsIndex from "../../assets/fonts/index";

const getFonts = font => {
	const fontFaces = [];
	const { name, format, styles } = font;

	for (const style in styles) {
		fontFaces.push(`
         @font-face {
            font-family: ${name};
            src: url("${styles[style].font}") format("${format}");
            font-weight: ${styles[style].weight};
            font-style: ${styles[style].style};
         }
      `);
	}
	return fontFaces.join("");
};

export const fontFaces = css`
	${Object.values(fontsIndex)
		.map(font => getFonts(font))
		.join("")};
`;

export default fontFaces;
