import React from "react";

const PrivateNavbar = ({Link}) => {

  const logOut = () => {
    window.localStorage.removeItem('loggedNoteappUser')
    location.reload()
  }
  
  return (
    <header className="header">
      <Link className="text" to='/etusivu'>etusivu</Link>
      <Link className="text" to='/uusi_projekti'>uusi projekti</Link>
      <Link className="text" to='/projektit'>projektit</Link>
      <button onClick={() => {logOut()}}>kirjaudu ulos</button>
    </header>
  )
}

export default PrivateNavbar