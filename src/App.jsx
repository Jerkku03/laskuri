import { useState, useEffect } from 'react'
import MateriaaliHaku from './components/MateriaaliHaku'
import LisatutMateriaalit from './components/LisatutMateriaalit';
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

//tallentaa pdf tiedoston materiaaleista
const Tulosta = () => {
  return (
    <button>Tallenna PDF</button>
  )
}



const App = () => {

  const [lista, setLista] = useState([])
 
  const [data, setData] = useState(null);

  const [haku, setHaku] = useState('')

  console.log(lista)

  return (
  <div id="body">
    <div id='header'>
      <p id='logo'>Laskentaohjelma</p>
      <ul id='sivut'>
        <li>kotisivu</li>
        <li>tietoja</li>
      </ul>
    </div>
    <h1>Laske rakentamisessa käytettävien materialien päästöt</h1>

    <div>
      hae materiaalia: <input id='matKork' value={haku} onChange={(e) => setHaku(e.target.value)}/>
      <MateriaaliHaku data={data} lista={lista} tila={setLista} haku={haku}/>
    </div>

    <div>
      <LisatutMateriaalit lista={lista}/>
    </div>

    <div>
      <Tulosta/>
    </div>

    <div>
      <Tiedot data={data} tila={setData}/>
    </div>

  </div>
  )
}

export default App

