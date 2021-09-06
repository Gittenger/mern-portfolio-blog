import React from 'react'

import {} from './SkillImage.styles.jsx'

import Images from '../../../assets/img/img-index.js'

const SkillImage = ({ img, className, ...props }) => {
	const {
		skills: { svg, png },
	} = Images

	return (
		<img
			{...props}
			className={
				img === 'react' ||
				img === 'figma' ||
				img === 'firebase' ||
				img === 'pug' ||
				img === 'nextjs' ||
				img === 'vim' ||
				img === 'graphql' ||
				img === 'linux'
					? `${className} is-svg`
					: className
			}
			src={
				img === 'node'
					? png.node
					: img === 'git'
					? png.git
					: img === 'redux'
					? png.redux
					: img === 'aws'
					? png.aws
					: img === 'python'
					? png.python
					: img === 'html'
					? png.html
					: img === 'sass'
					? png.sass
					: img === 'gatsby'
					? png.gatsby
					: img === 'mongo'
					? png.mongo
					: img === 'mongoose'
					? png.mongoose
					: img === 'digitalocean'
					? png.digitalOcean
					: img === 'css'
					? png.css
					: img === 'react'
					? svg.react
					: img === 'figma'
					? svg.figma
					: img === 'firebase'
					? svg.firebase
					: img === 'graphql'
					? svg.graphql
					: img === 'linux'
					? svg.linux
					: img === 'vim'
					? svg.vim
					: img === 'pug'
					? svg.pug
					: img === 'nextjs'
					? svg.nextjs
					: svg.react
			}
			alt=""
		/>
	)
}

export default SkillImage
