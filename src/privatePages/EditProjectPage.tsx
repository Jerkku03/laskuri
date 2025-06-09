import React from "react";
import projectService from '../services/project'

const EditProjectPage = ({id}) => {
    
    const project = projectService.getProject(id)
    console.log(project)
    return (
        <div>
            {}
        </div>
    )
}

export default EditProjectPage