import React from "react";
import projectService from '../services/project'

const Project = ({project}) => {

    const onDelete = () => {
        if (window.confirm(`Poista ${project.projectName}?`)){
            projectService.remove(project.id)
        }
        window.location.reload()
    }

    const onOpen = () => {
        
    }

    return (
        <div>
            {project.projectName}
            <button onClick={() => {onOpen()}}>avaa projekti</button>
            <button onClick={() => {onDelete()}}>poista</button>
        </div>
    )
}

export default Project