import React, { useEffect } from 'react'
import {useState} from 'react'
import projectService from '../services/project'
import PropTypes from 'prop-types'
import Project from './Project'

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        projectService.getAll().then(projects => 
            setProjects(projects)
        )
    }, [])
    
    console.log(projects)

    return (
        <>
            {projects.map(project => <Project project={project}/>)}
        </>
    )
}

export default Projects