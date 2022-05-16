import React, { useEffect } from 'react'

import CIndex from '../../components/components.index.js'
import { ContactPageContainer, ContactTempBox } from './Contact.styles.jsx'

const Contact = () => {
  const { ContactForm, TComp } = CIndex
  const { PSmall } = TComp

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ContactPageContainer>
      {/* <ContactForm /> */}
      <ContactTempBox>
        <PSmall>
          I'm currently fixing my automated email system by migrating to a new
          provider, <a href="https://www.sendinblue.com/">SendInBlue</a>.
        </PSmall>
        <PSmall>
          In the meantime, feel free to reach out and email me at:
        </PSmall>
        <a href="mailto:john@johnpittenger.dev">john@johnpittenger.dev</a>
      </ContactTempBox>
    </ContactPageContainer>
  )
}

export default Contact
