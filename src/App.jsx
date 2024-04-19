import { useState } from 'react'

//materiaali vaihtoehdot
const Materiaalit = (props) => {

  var lastulevy = {'materiaali' : 'LASTULEVY 11 P1 11X1200X2600 MM POHJAMAALATTU 3,12 M²',
                      'hinta': 50}
  var kestopuu = {'materiaali' : 'KESTOPUU HÖYLÄTTY RAW AB 28X120 MM RUSKEA VIISTETTY',
                    'hinta' : 40}
  
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
            </select>
            <label htmlFor='numero'>kpl:</label>
            <input id='numero' name='numero' type='number' label='numero' required/>
            <button onClick={onSubmit}>Lisää</button>
        </form>
  )
}
  

//kaikki lisätyt materiaalit
const Lisatut = (props) => {

  let lista = props.lista

  console.log(lista.length)

  if (lista.length > 0){
    const listItems = lista.map((d) => <li key={d.materiaali}>{d.materiaali}       kpl: {d.maara}</li>);
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
  </div>
  )
}

export default App
