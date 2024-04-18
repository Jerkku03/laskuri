import { useState } from 'react'

//materiaali vaihtoehdot
const Materiaalit = () => {

  const lastulevy = 'LASTULEVY 11 P1 11X1200X2600 MM POHJAMAALATTU 3,12 M²'
  const kestopuu = 'KESTOPUU HÖYLÄTTY RAW AB 28X120 MM RUSKEA VIISTETTY'

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('toimii');
  }

  return (
      <form onSubmit={handleSubmit} id='sisalto'>
        <p>materiaali:</p>
        <select name='materiaalit'>
            <option value="lastulevy">{lastulevy}</option>
            <option value='kestopuu'>{kestopuu}</option>
            <option value="naulapaketti">naulapaketti</option>
          </select>
          <p>kpl:</p>
          <input type="number"/>
          <input type="submit" />
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

  const lista = {}

  return (
  <div id="kokosivu">
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
