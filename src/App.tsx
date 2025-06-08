import React from 'react';
import { useState, useEffect } from 'react'
import ErrorNotification from './components/ErrorNotification';
import SuccessNotification from './components/SucceessNotification';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router"
import LoginPage from './pages/LoginPage';
import FrontPage from './pages/FrontPage';
import NewUserPage from './pages/NewUserPage';
import ProjectsPage from './privatePages/ProjectsPage';
import PrivateNavBar from './components/PrivateNavBar';
import NewProjectPage from './privatePages/NewProjectPage';
import projectService from './services/project';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      projectService.setToken(user.token)
    }
  }, [])


  return (
  <>
    <ErrorNotification message={errorMessage} />
    <SuccessNotification message={successMessage} />

    {!user && 
    <Navbar Link={Link}/>
    }
    {!user && 
    <Routes>
      <Route path='/uusi' element={<NewUserPage setUser={setUser} setErrorMessage={setErrorMessage}/>}></Route>
      <Route path='/kirjaudu' element={<LoginPage setUser={setUser} setErrorMessage={setErrorMessage}/>}/>
      <Route path='/*' element={<FrontPage/>}></Route>
      <Route path='/etusivu' element={<FrontPage/>}></Route>
    </Routes>
     }

    {user && 
    <PrivateNavBar Link={Link}/>
    }
    
    {user &&  
    <Routes>
      <Route path='/projektit' element={<ProjectsPage/>}></Route>
      <Route path='/*' element={<ProjectsPage/>}></Route>
      <Route path='/uusi_projekti' element={<NewProjectPage setErrorMessage={setErrorMessage}/>}></Route>
    </Routes>
    }
  </>
  )
}

export default App

