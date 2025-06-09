import React from "react";
import projectService from '../services/project'
import {useSelector} from "react-redux";
import { useState, useEffect } from "react";

const EditProjectPage = () => {

    const [project, setProject] = useState(null)

    const currentUrl = window.location.href
    const id = currentUrl.split('/')[4]

    useEffect(() => {
            projectService.getProject(id).then(project => 
                setProject(project)
            )
        }, [])


    console.log(project)
    return (
        <div>
            {!project && <div>lataa...</div>}
            {project && 
            <>
            <div>{project.projectName}</div>

            <div>{project.materials}</div>
            </>}
        </div>
    )
}

export default EditProjectPage