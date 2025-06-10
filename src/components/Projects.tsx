import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Project from './Project'
import { useNavigate } from "react-router-dom";
import projectService from '../services/project'

const Projects = ({projects, setProjects}) => {

    const navigate = useNavigate()

    const onDelete = (name, projId) => {
            if (window.confirm(`Poista ${name}?`)){
                projectService.remove(projId)
                const newProjects = projects.filter((project) => project.id != projId)
                setProjects(newProjects)
            }
        }

    if (projects != null){
    return (
        <>
            <div>{projects.map((project) => 
                <div>{project.projectName}
            <button onClick={() => {navigate(`/projekti/${project.id}`)}}>avaa projekti</button>
            <button onClick={() => {onDelete(project.projectName, project.id)}}>poista</button></div>)}</div>
        </>
    )}

    return (
        <div>lataa...</div>
    )
}

export default Projects