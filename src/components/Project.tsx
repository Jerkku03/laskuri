import React from "react";
import projectService from '../services/project'

const Project = ({project}) => {

    const onDelete = () => {
        if (window.confirm(`Poista ${project.projectName}?`)){
            projectService.remove(project.id)
        }
        window.location.reload()
    }

    return (
        <div>
            {project.projectName}
            <button onClick={() => {window.location.href=`/projekti/${project.id}`}}>avaa projekti</button>
            <button onClick={() => {onDelete()}}>poista</button>
        </div>
    )
}

export default Project