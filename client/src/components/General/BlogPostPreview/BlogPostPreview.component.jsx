import React from 'react'
import { Link } from 'react-router-dom'

import {} from './BlogPostPreview.styles'

const BlogPostPreview = ({ linkTo, title }) => {
	return <Link to={linkTo}>{title}</Link>
}

export default BlogPostPreview
