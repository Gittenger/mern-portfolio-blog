import React, { useEffect } from 'react'

import CIndex from '../../components/components.index.js'

import { ContactPageContainer } from './ContactPageContent.styles.jsx'

const ContactPageContent = () => {
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

export default ContactPageContent
