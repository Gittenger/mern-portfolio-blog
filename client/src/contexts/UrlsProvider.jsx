import React, { useState } from 'react'

import UrlsContext from './UrlsContext.js'

export const UrlsProivder = ({ children }) => {
	const [urls, setUrls] = useState({})
	const setUrlsContext = (url, apiData) => {
		if (!urls[url]) {
			setUrls({
				...urls,
				[url]: apiData,
			})
		}
	}

	return (
		<UrlsContext.Provider value={{ urls, setUrlsContext }}>
			{children}
		</UrlsContext.Provider>
	)
}

export default UrlsProivder
