import React from 'react'

import { ResumePageContentContainer } from './Resume.styles'

const Resume = () => {
	const downloadUrl = `${process.env.REACT_APP_PUBLIC}/pdf/resume.pdf`
	return (
		<ResumePageContentContainer>
			<h1>Resume</h1>
			<p>Link to download:</p>
			<a href={downloadUrl} download>
				Download resume
			</a>
		</ResumePageContentContainer>
	)
}

export default Resume
