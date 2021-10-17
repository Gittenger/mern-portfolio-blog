import React from 'react'
import { useApiData } from '../../utils/hooks.js'

import { BlogPageContentContainer } from './Blog.styles'
import CIndex from '../../components/components.index.js'

const Blog = () => {
	const url = `${process.env.REACT_APP_API}/posts`
	const [apiData, dataProcessed] = useApiData(url)

	const { Spinner, BlogPostPreview } = CIndex

	const { data } = apiData

	return (
		<BlogPageContentContainer>
			{dataProcessed ? (
				Object.keys(data).map((post, i) => (
					<BlogPostPreview
						key={i}
						linkTo={`/blog/posts/${data[post].slug}`}
						title={data[post].title}
					/>
				))
			) : (
				<Spinner />
			)}
		</BlogPageContentContainer>
	)
}

export default Blog
