import React, { useEffect } from 'react'

import CIndex from '../../components/components.index.js'

import { ContactPageContainer } from './Contact.styles.jsx'

const Contact = () => {
	const { ContactForm } = CIndex

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<ContactPageContainer>
			<ContactForm />
		</ContactPageContainer>
	)
}

export default Contact
