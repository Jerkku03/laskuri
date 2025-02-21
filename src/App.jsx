import { useState, useEffect } from 'react'
import MateriaaliHaku from './components/MateriaaliHaku'
import LisatutMateriaalit from './components/LisatutMateriaalit';
import Export from './components/Pdf';
import ErrorNotification from './components/ErrorNotification';
import SuccessNotification from './components/SucceessNotification';
import Login from './components/Login';

//import Fetch from '../src/Fetch'
//import './testi.json';


//hae tiedot testi.json tiedostosta

const Tiedot = (props) => {

  useEffect(() => {
    fetch('../src/testi.json')
      .then(response => response.json())
      .then(tied => {
        props.tila(tied);
       })
       .catch((err) => {
          return (err.message)
       });

 }, []);
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
    <div id='header'>
      <p id='logo'>Laskentaohjelma</p>
      <ul id='sivut'>
        <li></li>
        <li></li>
      </ul>
    </div>
    <ErrorNotification message={errorMessage} />
    <SuccessNotification message={successMessage} />
    {!user && <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} user={user} setUser={setUser} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
    {user &&  <button onClick={() => {window.localStorage.removeItem('loggedNoteappUser')}}>logout</button>}
   {user && <div id="body">
    <h1>Laske rakentamisessa käytettävien materialien päästöt</h1>
    <p> Kirjoita Hae Materiaalia kohtaan materiaalin nimi. <br />
        tämän jälkeen klikkaa valitse materiaali, etsi valikosta materiaali ja klikkaa sitä. <br />
        lisää neliöt kohtaan neliöitä, jossa käytit materiaalia <br />
        Klikkaa lisää nappia <br />
        Toista prosessi kunnes olet lisännyt kaikki haluamasi materiaalit. <br />
        Lopuksi klikkaa nappia Tallenna PDF, niin laskelma tallentuu tietokoneellesi.
    </p>

    <div>
      <p>hae materiaalia:<input id='matKork' value={haku} onChange={(e) => setHaku(e.target.value)}/> </p>
      <MateriaaliHaku data={data} lista={lista} tila={setLista} haku={haku}/>
    </div>

    <div>
      <Export lista={lista}/>
    </div>
    
    <div>
      <Tiedot data={data} tila={setData}/>
    </div>
  </div>}
  
  </>
  )
}

export default App

