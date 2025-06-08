import React from "react";
import { useEffect, useState } from "react";
import projectService from "../services/project";

const NewProjectPage = ({setErrorMessage}) => {
    const [projectName, setProjectName] = useState('')

    const handleNewProject = async (event) => {
        event.preventDefault()
        try {
          projectService.create({projectName})
        } catch (exception) {
          setErrorMessage('error')
        }

        return null
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