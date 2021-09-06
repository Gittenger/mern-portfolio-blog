import React from 'react'

import {} from './YtEmbed.styles'

const YtEmbed = ({ linkId }) => {
	return (
		<>
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${linkId}`}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</>
	)
}

export default YtEmbed
