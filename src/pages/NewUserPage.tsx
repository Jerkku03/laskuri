import React from 'react'
import {useState} from 'react'
import newUserService from '../services/newUser'
import PropTypes from 'prop-types'
import projectService from '../services/project'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/slices/userSlice';


const NewUserPage = ({setErrorMessage}) => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')


  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    if (password !== passwordAgain) {
      setErrorMessage('salasanat eivät ole samat!')
      setUsername('')
      setPassword('')
      setPasswordAgain('')
      return null
    }

    try {
      const user = await newUserService.newUser({
        username, email, password
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
      <h2>Luo käyttäjä</h2>
      <form onSubmit={handleLogin}>
        <div>
          sähköposti:
          <input
            type="text"
            value={email}
            name="email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          käyttäjätunnus:
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
        <div>
          salasana uudelleen:
          <input
            type="password"
            value={passwordAgain}
            name="PasswordAgain"
            onChange={({ target }) => setPasswordAgain(target.value)}
          />
        </div>
        <button type="submit">luo käyttäjä</button>
      </form>
    </>
  )
}

NewUserPage.protoTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassworde: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired
}

export default NewUserPage