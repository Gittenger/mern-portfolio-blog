import React from 'react'

import { CheckboxContainer } from './Checkbox.styles'

const Checkbox = ({ label, className, checked, handleInputChange, name }) => (
	<CheckboxContainer className={className}>
		<input
			id="id1"
			type="checkbox"
			checked={checked}
			onChange={handleInputChange}
			name={name}
		/>
		<label htmlFor="id1">{label}</label>
	</CheckboxContainer>
)

export default Checkbox
