import React, {useEffect} from "react";
import Projects from "../components/Projects";
import { useLocation, useNavigate } from "react-router-dom";
import {useState} from 'react';
import allProjectService from '../services/allProjects';
import { useSelector } from "react-redux";


const ProjectsPage = () => {

    const [projects, setProjects] = useState(null)
    
    const navigate = useNavigate()

    const id = useSelector((state) => state.user.user.id)

    async function loadData() {
            await allProjectService.getAll(id)
            .then(pro => 
                setProjects(pro)
            )
        }

    useEffect(() => {
        loadData()
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