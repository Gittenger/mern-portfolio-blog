import node from './skills/node.png'
import aws from './skills/aws.png'
import html from './skills/html.png'
import redux from './skills/redux.png'
import css from './skills/css.png'
import gatsby from './skills/gatsby.png'
import python from './skills/python.png'
import git from './skills/git.png'
import sass from './skills/sass.png'
import mongoose from './skills/mongoose.png'
import mongo from './skills/mongodb.png'
import digitalOcean from './skills/digital-ocean.png'
import figma from './skills/svg/figma.svg'
import firebase from './skills/svg/firebase.svg'
import graphql from './skills/svg/graphql.svg'
import linux from './skills/svg/linux.svg'
import nextjs from './skills/svg/nextjs.svg'
import pug from './skills/svg/pug.svg'
import react from './skills/svg/react.svg'
import vim from './skills/svg/vim.svg'
import projectDefault from './projects/default.png'
import projectFF from './projects/fantastic-flames.png'
import projectPoke from './projects/pokedex.png'
import projectArt from './projects/art-shoppe.png'
import projectMern from './projects/mern-demo.png'
import projectMockPort from './projects/mock-portfolio.png'
import projectJS30 from './projects/js30.png'
import projectNatours from './projects/natours.png'
import projectFem from './projects/fem.png'
import profile from './headshot.jpeg'

export const Images = {
  skills: {
    png: {
      node,
      aws,
      html,
      redux,
      css,
      gatsby,
      python,
      git,
      sass,
      mongo,
      mongoose,
      digitalOcean,
    },
    svg: { figma, firebase, graphql, linux, nextjs, pug, react, vim },
  },
  projects: {
    'fantastic-flames': projectFF,
    'default': projectDefault,
    'art-shoppe': projectArt,
    'pokedex': projectPoke,
    'mern-template-demo': projectMern,
    'mock-portfolio': projectMockPort,
    'javascript-30': projectJS30,
    'natours': projectNatours,
    'frontend-mentor-projects': projectFem,
  },
  profile,
}

export default Images
