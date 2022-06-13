import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { EditContainer } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index.js'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const CreateProject = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    techStack: '',
    link: '',
    github: '',
    youtubeId: '',
    descriptionLong: '',
  })
  const [messageData, setMessageData] = useState({
    error: false,
    message: '',
  })
  const history = useHistory()

  const url = `${process.env.REACT_APP_API}/projects`
  const { error, message } = messageData
  const { token } = checkAuthToken()

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('descriptionLong', descriptionLong)
    formData.append('youtubeId', youtubeId)
    formData.append('link', link)
    formData.append('github', github)
    formData.append('techStack', techStack)

    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setMessageData({
          error: false,
          message: res.message,
        })
        setValues({
          name: '',
          description: '',
          techStack: '',
          link: '',
          github: '',
          youtubeId: '',
          descriptionLong: '',
        })
      })
      .catch((err) => {
        setMessageData({
          error: true,
          message: 'There was an error submitting the data',
        })
      })
  }

  const {
    name,
    description,
    descriptionLong,
    techStack,
    link,
    github,
    youtubeId,
  } = values

  const { DisplayMessage } = CIndex

  return (
    <EditContainer>
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={name}
          name="name"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          type="text"
          value={description}
          name="description"
          placeholder="Short description"
        />
        <input
          onChange={handleChange}
          type="text"
          value={techStack}
          name="techStack"
          placeholder="Tech stack, separated by commas"
        />
        <input
          onChange={handleChange}
          type="text"
          value={link}
          name="link"
          placeholder="Link to project"
        />
        <input
          name="youtubeId"
          type="text"
          onChange={handleChange}
          value={youtubeId}
          placeholder="YouTube ID"
        />
        <input
          onChange={handleChange}
          type="text"
          value={github}
          name="github"
          placeholder="Github link"
        />
        <textarea
          name="descriptionLong"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={descriptionLong}
          placeholder="Full markdown description"
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <DisplayMessage message={message} className={error ? 'error' : ''} />
      <button onClick={history.goBack} className="menu-button">
        &#8612; Menu
      </button>
    </EditContainer>
  )
}
export default CreateProject
