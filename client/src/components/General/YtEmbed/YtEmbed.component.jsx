import React from 'react'

import {} from './YtEmbed.styles'

const YtEmbed = ({ linkId, className }) => {
	return (
		<>
			<iframe
				className={className}
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${linkId}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</>
	)
}

export default YtEmbed
