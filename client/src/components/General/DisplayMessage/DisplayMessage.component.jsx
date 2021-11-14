import React from 'react'

import { DisplayMessageContainer } from './DisplayMessage.styles'

const DisplayMessage = ({ message, className }) => (
	<DisplayMessageContainer className={className}>
		{message}
	</DisplayMessageContainer>
)

export default DisplayMessage
