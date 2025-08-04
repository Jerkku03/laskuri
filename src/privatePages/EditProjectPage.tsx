import React from "react";
import projectService from '../services/project'
import { useState, useEffect } from "react";
import Export from "../components/Pdf";
import Fetch from "../services/Fetch";
import MateriaaliHaku from "../components/MateriaaliHaku";
import { useLocation } from "react-router-dom";

const EditProjectPage = () => {

    const [project, setProject] = useState(null)
    const [lista, setLista] = useState(null)
    const [haku, setHaku] = useState('')
    const [data, setData] = useState(null)


    const currentUrl = useLocation()
    const id = currentUrl.pathname.substring(currentUrl.pathname.lastIndexOf('/') + 1)

    useEffect(() => {
            projectService.getProject(id).then(project => {
                setProject(project)
                setLista(project.materials)
            }
            )
        }, [])
    //console.log(project.materials)

    return (
        <div>
            {!project && <div>lataa...</div>}
            {project && 
            <>
            <h1>Laske rakentamisessa käytettävien materialien päästöt</h1>
    <p> Kirjoita Hae Materiaalia kohtaan materiaalin nimi. <br />
        tämän jälkeen klikkaa valitse materiaali, etsi valikosta materiaali ja klikkaa sitä. <br />
        lisää neliöt kohtaan neliöitä, jossa käytit materiaalia <br />
        Klikkaa lisää nappia <br />
        Toista prosessi kunnes olet lisännyt kaikki haluamasi materiaalit. <br />
        Lopuksi klikkaa nappia Tallenna PDF, niin laskelma tallentuu tietokoneellesi.
    </p>
            <h2>Projekti: {project.projectName}</h2>
            <div>
                <div className="materiaaliHaku">
                <p className="hakuMarginaali">hae materiaalia:</p>
                <input id='matKork' className='materiaalit' value={haku} onChange={(e) => setHaku(e.target.value)}/> 
                </div>
                <MateriaaliHaku data={data} lista={lista} setLista={setLista} haku={haku} projectName={project.projectName} id={id}/>
            </div>
            <Fetch setData={setData}/>
            <div className="listaRaja">
                  <Export lista={lista} id={id} projectName={project.projectName} setLista={setLista}/>
                  </div>
            </>}

        </div>
    )
}

export default EditProjectPage