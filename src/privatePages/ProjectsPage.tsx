import React from "react";
import Projects from "../components/Projects";

const ProjectsPage = () => {
    return (
        <>
        <Projects/>
        <div>
        <button type='button' onClick={() => {window.location.href='/uusi_projekti'}}>uusi projekti</button>
        </div>
        </>
    )
}

export default ProjectsPage