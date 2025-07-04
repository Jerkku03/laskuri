import React from "react";
import { useEffect, useState } from "react";
import projectService from "../services/project";
import { useNavigate } from "react-router-dom";


const NewProjectPage = ({setErrorMessage}) => {
    const [projectName, setProjectName] = useState('')

    const navigate = useNavigate()

    const handleNewProject = async (event) => {
        event.preventDefault()
        try {
          await projectService.create({projectName})
        } catch (exception) {
          setErrorMessage('error')
        }
        navigate("/projektit")
    }
    return (
        <>
        <h2>Uusi projekti</h2>
      <form onSubmit={handleNewProject}>
        <div>
          Projekti nimi:
          <input
            type="text"
            value={projectName}
            name="projectName"
            onChange={({ target }) => setProjectName(target.value)}
          />
        </div>
        <button type="submit">luo uusi</button>
      </form>
      </>
    )
}

export default NewProjectPage