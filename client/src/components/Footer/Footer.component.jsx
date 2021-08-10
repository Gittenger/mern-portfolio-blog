import React from 'react'

import { FooterContainer, Copyright, Links, Credits } from './Footer.styles.jsx'

import { ReactComponent as EmailImg } from '../../assets/icons/email.svg'
import { ReactComponent as FacebookImg } from '../../assets/icons/facebook.svg'
import { ReactComponent as InstagramImg } from '../../assets/icons/instagram.svg'

const Footer = () => (
	<FooterContainer>
		<Copyright>&copy; 2021 My Website</Copyright>
		<Links>
			<ul>
				<li>
					<a href={`mailto:${process.env.REACT_APP_MAIN_EMAIL}`}>
						<EmailImg />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.facebook.com"
					>
						<FacebookImg />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.instagram.com/"
					>
						<InstagramImg />
					</a>
				</li>
			</ul>
		</Links>
		<Credits>
			<div>
				Website made by{' '}
				<a href="http://www.johnpittenger.com/" title="Vectors Market">
					John Pittenger
				</a>{' '}
				Website design © John Pittenger
			</div>
		</Credits>
	</FooterContainer>
)

export default Footer
