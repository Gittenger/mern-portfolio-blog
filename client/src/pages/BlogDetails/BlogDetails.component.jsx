import React from 'react'
import { useApiData } from '../../utils/hooks.js'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import CIndex from '../../components/components.index.js'
import { BlogDetailsContainer } from './BlogDetails.styles'

const BlogDetails = () => {
	const { slug } = useParams()

	const url = `${process.env.REACT_APP_API}/posts`
	const [apiData, dataProcessed] = useApiData(url)

	const renderers = {
		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '')
			return !inline && match ? (
				<Prism
					style={dracula}
					language={match[1]}
					PreTag="div"
					children={String(children).replace(/\n$/, '')}
					{...props}
				/>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			)
		},
		p({ ...props }) {
			return <PSmall {...props} />
		},
	}

	const {
		TComp: { PSmall, H2 },
		Spinner,
	} = CIndex

	const { data } = apiData

	return dataProcessed ? (
		<BlogDetailsContainer>
			<H2>{data[slug].name}</H2>
			<ReactMarkdown components={renderers} children={data[slug].content} />
		</BlogDetailsContainer>
	) : (
		<Spinner />
	)
}

export default BlogDetails
