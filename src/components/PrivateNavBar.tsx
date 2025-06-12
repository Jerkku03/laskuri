import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

const PrivateNavbar = ({Link}) => {
  const navigate = useNavigate()

  const logOut = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    navigate(0)
  }
  
  return (
    <header className="header">
      <Link className="text" to='/uusi_projekti'>uusi projekti</Link>
      <Link className="text" to='/projektit'>projektit</Link>
      <button className="kirjaudu" onClick={() => {logOut()}}>kirjaudu ulos</button>
    </header>
  )
}

export default PrivateNavbar