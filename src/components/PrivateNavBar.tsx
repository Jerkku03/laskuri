import React from "react";

const PrivateNavbar = ({Link}) => {
  
  return (
    <header className="header">
      <Link className="text" to='/etusivu'>etusivu</Link>
      <Link className="text" to='/lisatietoja'>lisätietoja</Link>
      <Link className="text" to='/projektit'>projektit</Link>
      <button onClick={() => {window.localStorage.removeItem('loggedNoteappUser')}}>kirjaudu ulos</button>
    </header>
  )
}

export default PrivateNavbar