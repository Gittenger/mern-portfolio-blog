import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { EditContainer } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index.js'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const CreateSkill = () => {
  const [values, setValues] = useState({
    name: '',
    desc: '',
    img: '',
    years: '',
    bullet: '',
  })
  const [messageData, setMessageData] = useState({
    error: false,
    message: '',
  })
  const history = useHistory()

  const url = `${process.env.REACT_APP_API}/skills`
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
    formData.append('desc', desc)
    formData.append('img', img)
    formData.append('years', years)
    formData.append('bullet', bullet)

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
      })
      .catch((err) =>
        setMessageData({
          error: true,
          message: 'There was an error submitting the data',
        })
      )
  }

  const { name, desc, img, years, bullet } = values
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
          value={desc}
          name="desc"
          placeholder="Description"
        />
        <input
          onChange={handleChange}
          type="text"
          value={img}
          name="img"
          placeholder="Which image icon"
        />
        <input
          onChange={handleChange}
          type="text"
          value={years}
          name="years"
          placeholder="Years experience"
        />
        <textarea
          name="bullet"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={bullet}
          placeholder="List of bullet points, sep = ':, '"
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
export default CreateSkill
