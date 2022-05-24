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
        img === 'reactjs' ||
        img === 'figma' ||
        img === 'firebase' ||
        img === 'pug' ||
        img === 'nextjs' ||
        img === 'vim' ||
        img === 'graphql' ||
        img === 'linux' ||
        img === 'javascript' ||
        img === 'js' ||
        img === 'reduxSaga' ||
        img === 'redux-saga'
          ? `${className} is-svg`
          : className
      }
      src={
        img === 'node' || img === 'nodejs'
          ? png.node
          : img === 'git'
          ? png.git
          : img === 'redux'
          ? png.redux
          : img === 'aws'
          ? png.aws
          : img === 'python'
          ? png.python
          : img === 'html' || img === 'html5'
          ? png.html
          : img === 'sass' || img === 'scss'
          ? png.sass
          : img === 'gatsby'
          ? png.gatsby
          : img === 'mongo' || img === 'mongodb'
          ? png.mongo
          : img === 'mongoose'
          ? png.mongoose
          : img === 'digitalocean'
          ? png.digitalOcean
          : img === 'css' || img === 'css3'
          ? png.css
          : img === 'bash'
          ? png.bash
          : img === 'fem'
          ? png.fem
          : img === 'gatsby'
          ? png.gatsby
          : img === 'gulp'
          ? png.gulp
          : img === 'heroku'
          ? png.heroku
          : img === 'netlify'
          ? png.netlify
          : img === 'nginx'
          ? png.nginx
          : img === 'openssh'
          ? png.openssh
          : img === 'parcel'
          ? png.parcel
          : img === 'postcss'
          ? png.postcss
          : img === 'stripe'
          ? png.stripe
          : img === 'styledComponents' || img === 'styled-components'
          ? png.styledComponents
          : img === 'tailwind' || img === 'tailwindcss'
          ? png.tailwind
          : img === 'webpack'
          ? png.webpack
          : img === 'react' || img === 'reactjs'
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
          : img === 'reduxSaga' || img === 'redux-saga'
          ? svg.reduxSaga
          : img === 'javascript' || img === 'js'
          ? svg.javascript
          : img === 'nextjs' || img === 'next'
          ? svg.nextjs
          : svg.react
      }
      alt=""
    />
  )
}

export default SkillImage
