import React, { useEffect, useContext } from 'react'
import PageContext from '../contexts/PageContext.js'

import CIndex from '../components/components.index.js'

const PageComponent = ({ title, Component, ...props }) => {
	const { Layout } = CIndex
	const { setPage } = useContext(PageContext)

	useEffect(() => {
		document.title = `${process.env.REACT_APP_MAIN_TITLE} | ${title}`
		setPage(title)
	}, [title, setPage])

	return (
		<Layout>
			<Component {...props} />
		</Layout>
	)
}

export const getPage = (title, component) => () =>
	<PageComponent title={title} Component={component} />

export default getPage
