import { useContext, useEffect, useState } from 'react'
import UrlsContext from '../contexts/UrlsContext'

export const useShouldUpdateCache = (url) => {
	const [shouldFetchNewApi, setShouldFetchNewApi] = useState(false)
	const { urls } = useContext(UrlsContext)
	const checkServerUrl = `${process.env.REACT_APP_API}/checkForUpdate`

	const cachedItem = JSON.parse(localStorage.getItem(url))

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		fetch(checkServerUrl, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				if (cachedItem && cachedItem.timeStamp < res.lastUpdated) {
					if (!unmounted) {
						setShouldFetchNewApi(true)
					}
				} else if (
					urls[url] &&
					urls[url].timestamp &&
					urls[url].timestamp < res.lastUpdated
				) {
					if (!unmounted) {
						setShouldFetchNewApi(true)
					}
				} else if (cachedItem && !cachedItem.timeStamp) {
					if (!unmounted) {
						setShouldFetchNewApi(true)
					}
				} else if (urls[url] && !urls[url].timeStamp) {
					if (!unmounted) {
						setShouldFetchNewApi(true)
					}
				} else {
					if (!unmounted) {
						setShouldFetchNewApi(false)
					}
				}
			})

		return () => {
			unmounted = true
		}
	}, [url])

	return shouldFetchNewApi
}
