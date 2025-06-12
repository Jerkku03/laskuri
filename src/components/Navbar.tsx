import React from "react";

const Navbar = ({Link}) => {
  
  return (
    <header className="header" data-testid='navbar'>
      <Link className="text" to='/etusivu'>etusivu</Link>
      <Link className="text" to='/lisatietoja'>lisätietoja</Link>
      <Link className="luoKayttaja" to='/uusi'>luo käyttäjä</Link>
      <Link className="kirjaudu" to='/kirjaudu'>kirjaudu</Link>
    </header>
  )
}

export default Navbar
