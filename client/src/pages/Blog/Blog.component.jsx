import React from 'react'
import { useApiData } from '../../utils/hooks.js'
import { Link } from 'react-router-dom'

import { BlogPageContentContainer } from './Blog.styles'

const Blog = () => {
	const url = `${process.env.REACT_APP_API}/posts`
	const [apiData, dataProcessed] = useApiData(url)

	const { data } = apiData

	return (
		<BlogPageContentContainer>
			{dataProcessed &&
				Object.keys(data).map((post, i) => (
					<Link key={i} to={`/blog/posts/${data[post].slug}`}>
						{data[post].title}
					</Link>
				))}
		</BlogPageContentContainer>
	)
}

export default Blog
