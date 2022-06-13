import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { EditContainer } from '../AdminGeneral.styles'
import CIndex from '../../../components/components.index.js'

import auth from '../../../utils/auth.js'
const { checkAuthToken } = auth

const EditSkill = () => {
  const [values, setValues] = useState({
    name: '',
    desc: '',
    img: '',
    years: '',
    bullet: '',
    id: '',
  })
  const [messageData, setMessageData] = useState({
    error: false,
    message: '',
  })

  const history = useHistory()

  const { name, desc, img, years, bullet } = values
  const { error, message } = messageData
  const { slug } = useParams()
  const { token } = checkAuthToken()

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    const url = `${process.env.REACT_APP_API}/skills/${slug}`

    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setValues({
          name: data.name,
          desc: data.desc,
          img: data.img,
          years: data.years,
          bullet: data.bullet.join(':, '),
          id: data._id,
        })
      })
      .catch((err) => {
        setMessageData({
          error: true,
          message: 'There was an error getting the data from the server',
        })
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const submitUrl = `${process.env.REACT_APP_API}/skills/${values.id}`

    const formData = new FormData()
    formData.append('name', name)
    formData.append('desc', desc)
    formData.append('img', img)
    formData.append('years', years)
    formData.append('bullet', bullet)

    fetch(submitUrl, {
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
      .catch((err) => {
        setMessageData({
          error: true,
          message: 'There was an error submitting the data',
        })
      })
  }

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
          placeholder="List of bullet points, sep = :,<space>"
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

export default EditSkill
