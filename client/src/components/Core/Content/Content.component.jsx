import React from 'react'

import CIndex from '../../components.index.js'
import { ContentContainer } from './Content.styles'

const Content = ({ children }) => {
	const { Footer } = CIndex

	return (
		<ContentContainer>
			{children}
			<Footer />
		</ContentContainer>
	)
}

export default Content
