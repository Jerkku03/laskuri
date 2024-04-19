import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

//materiaali vaihtoehdot
const Materiaalit = () => {

  const lastulevy = 'LASTULEVY 11 P1 11X1200X2600 MM POHJAMAALATTU 3,12 M²'
  const kestopuu = 'KESTOPUU HÖYLÄTTY RAW AB 28X120 MM RUSKEA VIISTETTY'

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(document.getElementById('materiaalit').value)
    console.log(document.getElementById('numero').value)
  }

  return (
      <form id='sisalto'>
          <label htmlFor='materiaalit'>materiaali:</label>
          <select name='materiaalit' label='materiaali:' id='materiaalit'>
              <option>{lastulevy}</option>
              <option>{kestopuu}</option>
            </select>
            <label htmlFor='numero'>kpl:</label>
            <input id='numero' name='numero' type='number' label='numero' required/>
            <button onClick={onSubmit}>Lisää</button>
        </form>
  )
}

//lisää materiaalin listaan
const Lisaa = (props) => {
   props.lista.push(Materiaalit.value)
}
  

//kaikki lisätyt materiaalit
const Lisatut = (props) => {
  let lista = props.lista

  if (lista.length > 0){
    return (
      <div>
        <p>löytyy</p>
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
      <Materiaalit/>
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
