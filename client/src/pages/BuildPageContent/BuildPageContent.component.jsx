import React, { useState } from 'react'

import { BuildPageContentContainer } from './BuildPageContent.styles'

const BuildPageContent = () => {
  const [values, setValues] = useState({
    title: '',
    excerpt: '',
    date: '',
    content: '',
  })
  const { title, excerpt, date, content } = values

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API}/posts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <BuildPageContentContainer>
      <form>
        <input name="title" type="text" onChange={handleChange} value={title} />
        <input
          name="excerpt"
          type="text"
          onChange={handleChange}
          value={excerpt}
        />
        <input name="date" type="text" onChange={handleChange} value={date} />
        <textarea
          name="content"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </BuildPageContentContainer>
  )
}

export default BuildPageContent
