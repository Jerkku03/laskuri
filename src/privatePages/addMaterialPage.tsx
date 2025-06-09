import React from "react";
import { useState } from "react";
import MateriaaliHaku from "../components/MateriaaliHaku";
import Fetch from "../services/Fetch";
import Export from "../components/Pdf";

const AddMaterialPage = () => {

  const [haku, setHaku] = useState('')
  const [data, setData] = useState(null)

  const [lista, setLista] = useState([])

    return (
        <>
        <div id="body">

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
    </div>
  </>
    )
}

export default AddMaterialPage