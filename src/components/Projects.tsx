import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Project from './Project'
import { useNavigate } from "react-router-dom";
import projectService from '../services/project'

const Projects = ({projects, setProjects}) => {
    const [showMessage, setShowMessage] = useState(false);

    const navigate = useNavigate()

    const onDelete = (name, projId) => {
            if (window.confirm(`Poista ${name}?`)){
                projectService.remove(projId)
                if (projects === undefined || projects.length < 1) {
                    setProjects(null)
                    navigate(0)
                } else{
                const newProjects = projects.filter((project) => project.id != projId)
                setProjects(newProjects)}
            }
        }

    if (projects != null){
    return (
        <div>
            <div>{projects.map((project) => 
                <div className='project-list' key={project.id}>
            <p className='project-list-text'>{project.projectName}</p>
            <button className='project-list-open' onClick={() => {navigate(`/projekti/${project.id}`)}}>avaa projekti</button>
            <button className='project-list-delete' onClick={() => {onDelete(project.projectName, project.id)}}>poista</button></div>)}</div>
        </div>
    )}

    const timer = setTimeout(() => { 
      setShowMessage(true)
    }, 2000);

    return (
    <>
    {showMessage ? <div data-testid='succeed'>ei projekteja</div> : 'lataa...'}
    </>)

    
}

export default Projects