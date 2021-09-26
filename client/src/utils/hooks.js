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

export const useApiData = (url) => {
	const [apiData, setApiData] = useState({
		data: {
			key: {},
		},
		timeStamp: '',
	})
	const [dataProcessed, setDataProcessed] = useState(false)

	const { urls, setUrlsContext } = useContext(UrlsContext)

	const shouldFetchNewApi = useShouldUpdateCache(url)
	const cachedItem = JSON.parse(localStorage.getItem(url))

	useEffect(() => {
		let unmounted = false
		if (unmounted) return

		if (cachedItem && shouldFetchNewApi === false) {
			console.log('from local')
			if (!unmounted) {
				setApiData(cachedItem)
				setDataProcessed(true)
			}
			setUrlsContext(url, cachedItem)
		} else if (urls[url] && shouldFetchNewApi === false) {
			console.log('from context')
			if (!unmounted) {
				setApiData(urls[url])
				setDataProcessed(true)
			}
		} else {
			fetch(url, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					const fromData = {}
					res.data.forEach((item) => {
						fromData[item.slug] = item
					})
					const dataObject = { timeStamp: new Date(), data: fromData }
					localStorage.setItem(url, JSON.stringify(dataObject))
					setUrlsContext(url, dataObject)
					if (!unmounted) {
						setApiData(dataObject)
						setDataProcessed(true)
					}
				})
				.catch((err) => console.error(err))
		}

		return () => {
			unmounted = true
		}
	}, [shouldFetchNewApi])

	return [apiData, dataProcessed]
}
