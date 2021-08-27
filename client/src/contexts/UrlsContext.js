import { createContext } from 'react'

export const UrlsContext = createContext({
	urls: {},
	setUrlsContext: () => {},
})

export default UrlsContext
