import React from 'react'
import { useApiData } from '../../utils/hooks.js'
import { Link } from 'react-router-dom'

import { BlogPageContentContainer } from './Blog.styles'
import CIndex from '../../components/components.index.js'

const Blog = () => {
	const url = `${process.env.REACT_APP_API}/posts`
	const [apiData, dataProcessed] = useApiData(url)

	const { Spinner } = CIndex

	const { data } = apiData

	return (
		<BlogPageContentContainer>
			{dataProcessed ? (
				Object.keys(data).map((post, i) => (
					<Link key={i} to={`/blog/posts/${data[post].slug}`}>
						{data[post].title}
					</Link>
				))
			) : (
				<Spinner />
			)}
		</BlogPageContentContainer>
	)
}

export default Blog
