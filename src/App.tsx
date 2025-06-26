import React from 'react';
import { useState, useEffect } from 'react'
import ErrorNotification from './components/ErrorNotification';
import SucceedNotification from './components/SucceedNotification';
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
import InformationPage from './pages/InformationPage'
import ProjectsPage from './privatePages/ProjectsPage';
import PrivateNavBar from './components/PrivateNavBar';
import NewProjectPage from './privatePages/NewProjectPage';
import projectService from './services/project';
import EditProjectPage from './privatePages/EditProjectPage';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/slices/userSlice';


const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [succeedMessage, setSucceedMessage] = useState(null)

  const user = useSelector((state) => state.user.user)

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(addUser(user))
      projectService.setToken(user.token)
    }
  }, [])

  return (
  <div id='body'>
    <ErrorNotification message={errorMessage} />

    {!user && 
    <Navbar Link={Link}/>
    }
    {user && 
    <PrivateNavBar Link={Link}/>
    }
      {!user && 
      <Routes>
      <Route path='/uusi' element={<NewUserPage setErrorMessage={setErrorMessage}/>}></Route>
      <Route path='/kirjaudu' element={<LoginPage setErrorMessage={setErrorMessage}/>}/>
      <Route path='/*' element={<FrontPage/>}></Route>
      <Route path='/etusivu' element={<FrontPage/>}></Route>
      <Route path='/lisatietoja' element={<InformationPage/>}></Route>
      </Routes>
     }
    {user &&  
      <Routes>
      <Route path='/projektit' element={<ProjectsPage/>}></Route>
      <Route path='/*' element={<ProjectsPage/>}></Route>
      <Route path='/uusi_projekti' element={<NewProjectPage setErrorMessage={setErrorMessage}/>}></Route>
      <Route path='/projekti/:id' element={<EditProjectPage />}></Route>
      </Routes>
}
    <Footer/>
  </div>
  )
}

export default App

