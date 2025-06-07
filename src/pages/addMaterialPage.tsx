import React from "react";

const addMaterialPage = () => {
    return (
        <>
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
      
    </div>
    <Fetch setData={setData}></Fetch>
  </div>}
  </>
    )
}