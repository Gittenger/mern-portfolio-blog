import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import auth from '../../utils/auth.js'

import { Form, Row, LoginPageContentContainer } from './LoginPageContent.styles'

const { authUser, setAuthToken } = auth

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    loggedIn: false,
    error: '',
  })

  const { email, password, error, loggedIn } = values

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValues({ ...values, error: '' })
    authUser({ email, password }, { authRoute: 'login' }).then((res) => {
      if (res.error) {
        console.log(res)
        setValues({ ...values, error: res.message })
      } else {
        console.log(res)
        setAuthToken(res, () => {
          setValues({
            ...values,
            loggedIn: true,
            error: '',
          })
        })
      }
    })
  }

  const showError = () => (
    <div
      style={{
        display: error ? '' : 'none',
        backgroundColor: 'darkred',
        color: 'offwhite',
      }}
    >
      {error}
    </div>
  )

  const LoginForm = () => (
    <Form>
      <Row>
        <label>Email</label>
        <input type="email" value={email} onChange={handleChange('email')} />
      </Row>
      <Row>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange('password')}
        />
      </Row>
    </Form>
  )

  return loggedIn ? (
    <Redirect to="/admin" />
  ) : (
    <LoginPageContentContainer>
      <h2>Login:</h2>
      {LoginForm()}
      <button onClick={handleSubmit}>Submit</button>
      {showError()}
    </LoginPageContentContainer>
  )
}

export default Login
