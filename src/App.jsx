

const Materiaalit = () => {
  return (
    <select name='materiaalit'>
        <option value='betoni'>KESTOPUU HÖYLÄTTY RAW AB 28X120 MM RUSKEA VIISTETTY</option>
        <option value="laminaatti">laminaatti</option>
        <option value="naulapaketti">naulapaketti</option>
      </select>
  )
}

const Lisaa = () => {
  return (
    <button>lisää</button>
  )
}

const Tulosta = () => {
  return (
    <button>Tulosta PDF</button>
  )
}



const App = () => (
  <div id="kokosivu">
    <h1>Laske rakentamisessa käytettävien materialien päästöt</h1>

    <div id="sisalto">
      <p>materiaali:</p>
      <Materiaalit/>
      <p>kpl:</p>
      <input type="integer" />
      <Lisaa/>
    </div>
    <div>
      <Tulosta/>
    </div>

  </div>
)

export default App
