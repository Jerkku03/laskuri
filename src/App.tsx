import { useState, useEffect } from 'react'
import MateriaaliHaku from './components/MateriaaliHaku'
import LisatutMateriaalit from './components/LisatutMateriaalit';
import Export from './components/Pdf';
import ErrorNotification from './components/ErrorNotification';
import SuccessNotification from './components/SucceessNotification';
import Login from './components/Login';
import Fetch from './services/Fetch';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useMatch,
  useParams
} from "react-router"

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <header>
      <Link style={padding} to='/etusivu'>etusivu</Link>
      <Link style={padding} to='/lisatietoja'>lisätietoja</Link>
      <Link style={padding} to='/kirjaudu'>kirjaudu</Link>
    </header>
  )
}

const App = () => {

  const [lista, setLista] = useState([])
 
  const [data, setData] = useState(null);

  const [haku, setHaku] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])


  return (
  <>
    <ErrorNotification message={errorMessage} />
    <SuccessNotification message={successMessage} />

    <Menu />
    {!user && <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} user={user} setUser={setUser} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
    {user &&  <button onClick={() => {window.localStorage.removeItem('loggedNoteappUser')}}>kirjaudu ulos</button>}

    <Routes>
      <Route path="/projects" element={user ? <Projects /> : <Navigate replace to="/login" />} />
      <Route path='/login'></Route>
    </Routes>
  </>
  )
}

export default App

