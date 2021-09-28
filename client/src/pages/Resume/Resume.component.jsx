import React from 'react'

import { ResumePageContentContainer } from './Resume.styles'

const Resume = () => {
	const downloadUrl = `${process.env.REACT_APP_PUBLIC}/pdf/resume.pdf`

	const download = (url, name) => {
		fetch(url)
			.then((res) => res.blob())
			.then((blob) => {
				const blobURL = URL.createObjectURL(blob)
				const a = document.createElement('a')
				a.href = blobURL
				a.style = 'display: none'

				if (name && name.length) a.download = name
				document.body.appendChild(a)
				a.click()
			})
	}

	const driveUrl =
		'https://drive.google.com/file/d/1fqA2Q1UlK8iUHy-x-HAM-t-8TVFGBTbq/view?usp=sharing'

	return (
		<ResumePageContentContainer>
			<h1>Resume</h1>
			<p>Link to download:</p>
			<button onClick={() => download(downloadUrl, 'my-resume.pdf')}>
				Download resume
			</button>
			<p>Link to view on Google Drive:</p>
			<a href={driveUrl} target="_blank">
				View on Drive
			</a>
		</ResumePageContentContainer>
	)
}

export default Resume
