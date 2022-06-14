import React from 'react'

import { ResumePageContentContainer } from './Resume.styles'
import Images from '../../assets/img/img-index'
import CIndex from '../../components/components.index.js'

const {
  certs: { CertCss, CertFccJs, CertNode, CertReact },
} = Images

const certs = [
  {
    name: 'react',
    detail: 'ReactJS/Redux, GraphQL Bootcamp',
    imgSrc: CertReact,
  },
  {
    name: 'node',
    detail: 'Node.js SSR Application Bootcamp',
    imgSrc: CertNode,
  },
  {
    name: 'javascript',
    detail: 'FreeCodeCamp JavaScript Module',
    imgSrc: CertFccJs,
  },
  {
    name: 'css',
    detail: 'Advanced CSS/Sass Bootcamp',
    imgSrc: CertCss,
  },
]

const Resume = () => {
  const downloadUrl = `${process.env.REACT_APP_PUBLIC}/pdf/resume.pdf`
  const {
    TComp: { H2 },
  } = CIndex

  const download = (url, name) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = blobURL
        a.style = 'display: none'

        if (name && name.length) a.download = name
        document.body.appendChild(a)
        a.click()
      })
  }

  const driveUrl =
    'https://drive.google.com/file/d/1AYgxXNKEOEDYtimMk0xS4PxaynQ5Pj9B/view?usp=sharing'

  return (
    <ResumePageContentContainer>
      <h1>Resume...</h1>
      <div className="resume-links">
        <div>
          <p>Link to download:</p>
          <button
            onClick={() => download(downloadUrl, 'John-Pittenger-Resume.pdf')}
          >
            Download resume
          </button>
        </div>
        <div>
          <p>Link to view on Google Drive:</p>
          <a href={driveUrl} target="_blank" rel="noreferrer">
            View on Drive
          </a>
        </div>
      </div>
      <div className="certs">
        <H2>Certificates...</H2>
        <div>
          {certs.map(({ imgSrc, name, detail }, i) => (
            <div key={i}>
              <H2>{detail}</H2>
              <div>
                <img src={imgSrc} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResumePageContentContainer>
  )
}

export default Resume
