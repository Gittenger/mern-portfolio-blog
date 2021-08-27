import React from 'react'

import CIndex from '../../components.index.js'
import { FooterContainer, Copyright, Links, Credits } from './Footer.styles.jsx'

import { ReactComponent as EmailImg } from '../../../assets/icons/email.svg'
import { ReactComponent as FacebookImg } from '../../../assets/icons/facebook.svg'
import { ReactComponent as InstagramImg } from '../../../assets/icons/instagram.svg'

const Footer = () => {
	const {
		TComp: { PSmall },
	} = CIndex

	return (
		<FooterContainer>
			<Copyright>
				<PSmall>&copy; 2021 My Website</PSmall>
			</Copyright>
			<Links>
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
}

export default Footer
