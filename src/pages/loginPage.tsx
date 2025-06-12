import React from 'react'
import {useState} from 'react'
import loginService from '../services/login'
import PropTypes from 'prop-types'
import projectService from '../services/project'

import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slices/userSlice';

const Login = ({setErrorMessage}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      projectService.setToken(user.token)

      dispatch(addUser(user))

      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <>
      <h2>Kirjaudu</h2>
      <form onSubmit={handleLogin}>
        <div>
          Käyttäjätunnus:
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          salasana:
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">kirjaudu</button>
      </form>
    </>
  )
}

Login.protoTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassworde: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired
}

export default Login