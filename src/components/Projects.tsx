import React, { useEffect } from 'react'
import {useState} from 'react'
import allProjectService from '../services/allProjects'
import PropTypes from 'prop-types'
import Project from './Project'
import {useSelector} from 'react-redux'

const Projects = () => {

    const [projects, setProjects] = useState([])

    const id = useSelector((state) => state.user.user.id)

    useEffect(() => {
        allProjectService.getAll({id}).then(projects => 
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