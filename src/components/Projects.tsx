import React, { useEffect } from 'react'
import {useState} from 'react'
import projectService from '../services/project'
import PropTypes from 'prop-types'

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
            {projects[0].name}
        </>
    )
}

export default Projects