import { useState, useEffect } from 'react'
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

const Mater = (props) => {
  let data = props.data

  let lista = props.lista

  const onSubmit = (e) => {
    e.preventDefault();
    
    //lisää materiaali listaan

    props.tila([
      ...lista,
      {'materiaali' : document.getElementById('materiaalit').value.split('co2')[0] ,
      'maara' : document.getElementById('numero').value ,
      'co2' : document.getElementById('materiaalit').value.split(':')[1]}
    ]);

    document.getElementById('materiaalit').value = '';
    document.getElementById('numero').value = '';

  }

  if (data != null) {
    const listaMater = data.Resources.map((d) => <option key={d.Resources}>{d.Names.FI} co2/m2:{d.ConservativeDataConversionFactor * d.DataItems.DataValueItems[0].Value}</option>);
    return (
      <form id='sisalto'>
        <label htmlFor='materiaalit'>materiaali:</label>
        <select name='materiaalit' label='materiaali:' id='materiaalit'>{listaMater}</select>
        <label htmlFor='numero'>neliöitä:</label>
        <input id='numero' name='numero' type='number' label='numero' required/>
        <button onClick={onSubmit}>lisää</button>
      </form>
  )
  }
  return (
    <div>
      lataa...
    </div>
  )

}

//kaikki lisätyt materiaalit
const Lisatut = (props) => {

  let lista = props.lista

  if (lista.length > 0){
    const listItems = lista.map((d) => <li key={d.materiaali}>{d.materiaali}       neliöitä: {d.maara}   co2 yht: {(d.maara*d.co2)}</li>);
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
 
  const [data, setData] = useState(null);

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

    <div id='sisalto'>
      <Mater data={data} lista={lista} tila={setLista}/>
    </div>

    <div>
      <Lisatut lista={lista}/>
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

