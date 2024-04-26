import { useState } from 'react'
//import Fetch from '../src/Fetch'
//import './testi.json';
//hae tiedot co2 sivustolta api callin avulla

const Tiedot = () => {
  let osoite = '../src/testi.json'

  let jsondata;    

  async function getData(url) {
    const response = await fetch(url);
  
    return response.json();
  }
  
  const data = getData(osoite);
  const mat = {data}
  console.log(mat)

}

//materiaali vaihtoehdot
const Materiaalit = (props) => {

  var lastulevy = {'materiaali' : 'LASTULEVY 11 P1 11X1200X2600 MM POHJAMAALATTU 3,12 M²',
                      'hinta': 50}
  var kestopuu = {'materiaali' : 'KESTOPUU HÖYLÄTTY RAW AB 28X120 MM RUSKEA VIISTETTY',
                    'hinta' : 40}
  var verkkomatto = {'materiaali' : 'Verkkomatto Conlit Firemat EI30 50 mm 4,5 m²',
                    'hinta' : 30}
  var levy = {'materiaali' : 'Palosuojalevy Conlit 150 P 30 mm 2,40 m²',
                    'hinta' : 20}
  var ruuvi = {'materiaali' : 'Jousiruuvi XFS 001 Paroc 40/20 mm 500 kpl',
                    'hinta' : 5}

  
  var lista = props.lista

  const onSubmit = (e) => {
    e.preventDefault();
    
    //lisää materiaali listaan

    props.tila([
      ...lista,
      {'materiaali' : document.getElementById('materiaalit').value ,
      'maara' : document.getElementById('numero').value}
    ]);

    document.getElementById('materiaalit').value = '';
    document.getElementById('numero').value = '';

  }

  return (
      <form id='sisalto'>
          <label htmlFor='materiaalit'>materiaali:</label>
          <select name='materiaalit' label='materiaali:' id='materiaalit'>
              <option>{lastulevy['materiaali']}</option>
              <option>{kestopuu['materiaali']}</option>
              <option>{verkkomatto['materiaali']}</option>
              <option>{levy['materiaali']}</option>
              <option>{ruuvi['materiaali']}</option>
            </select>
            <label htmlFor='numero'>neliöitä:</label>
            <input id='numero' name='numero' type='number' label='numero' required/>
            <button onClick={onSubmit}>Lisää</button>
        </form>
  )
}
  

//kaikki lisätyt materiaalit
const Lisatut = (props) => {

  let lista = props.lista

  if (lista.length > 0){
    const listItems = lista.map((d) => <li key={d.materiaali}>{d.materiaali}       neliöitä: {d.maara}</li>);
    return (
      <div>
        <p>{listItems}</p>
      </div>
    )
  }
  return (
    <div>
      <p>Aloita lisäämään materiaaleja</p>
    </div>
  )

}

//tallentaa pdf tiedoston materiaaleista
const Tulosta = () => {
  return (
    <button>Tallenna PDF</button>
  )
}



const App = () => {

  const [lista, setLista] = useState([])
 

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

    <div id="sisalto">
      <Materiaalit lista={lista} tila={setLista}/>
    </div>

    <div>
      <Lisatut lista={lista}/>
    </div>

    <div>
      <Tulosta/>
    </div>

    <div>
      <Tiedot/>
    </div>
  </div>
  )
}

export default App

