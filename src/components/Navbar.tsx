import React from "react";

const Navbar = ({Link}) => {
  
  return (
    <header className="header">
      <Link className="text" to='/etusivu'>etusivu</Link>
      <Link className="text" to='/lisatietoja'>lisätietoja</Link>
      <Link className="text" to='/uusi'>luo käyttäjä</Link>
      <Link className="text" to='/kirjaudu'>kirjaudu</Link>
    </header>
  )
}

export default Navbar
