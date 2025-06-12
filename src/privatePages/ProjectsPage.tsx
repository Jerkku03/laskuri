import React, {useEffect} from "react";
import Projects from "../components/Projects";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import allProjectService from '../services/allProjects'
import { useSelector } from "react-redux";


const ProjectsPage = () => {

    const [projects, setProjects] = useState(null)
    
    const navigate = useNavigate()

    const id = useSelector((state) => state.user.user.id)

    useEffect(() => {
            allProjectService.getAll(id).then(projects => 
                setProjects(projects)
            )
        }, [])
    
    return (
        <>
        <Projects projects={projects} setProjects={setProjects}/>
        <div>
        <button className="new-project-button" type='button' onClick={() => {navigate("/uusi_projekti")}}>uusi projekti</button>
        </div>
        </>
    )
}

export default ProjectsPage