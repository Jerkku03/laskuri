import React from "react";
import projectService from '../services/project'
import {useSelector} from "react-redux";
import { useState, useEffect } from "react";
import AddMaterialPage from "./addMaterialPage";

const EditProjectPage = () => {

    const [project, setProject] = useState(null)

    const currentUrl = window.location.href
    const id = currentUrl.split('/')[4]

    useEffect(() => {
            projectService.getProject(id).then(project => 
                setProject(project)
            )
        }, [])
    //console.log(project.materials)
    const onNewMaterial = () => {
        projectService.update(id, {projectName: project.projectName, materials: {3: 'kivi', 4: 'puu'} })
    }


    console.log(project)
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
            <h2>{project.projectName}</h2>

            <div>{project.materials[3]}</div>
            </>}
            <button onClick={() => {onNewMaterial()}}>new material</button>

            <AddMaterialPage/>

        </div>
    )
}

export default EditProjectPage