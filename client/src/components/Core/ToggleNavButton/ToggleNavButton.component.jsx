import React from 'react'

import { ToggleNavButtonContainer } from './ToggleNavButton.styles.jsx'

import { ReactComponent as Chevron } from '../../../assets/icons/chevron-up.svg'

const ToggleNavButton = ({ showNavList, onClickFunc, className }) => (
	<ToggleNavButtonContainer
		className={showNavList ? `${className} active` : `${className} inactive`}
		onClick={onClickFunc}
	>
		<Chevron />
	</ToggleNavButtonContainer>
)

export default ToggleNavButton
