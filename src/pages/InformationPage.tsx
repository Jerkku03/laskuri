import React from "react";
import photo from "../paastolaskuri.png"

const InformationPage = () => {
    return (
        <div>
            <h3>miltä ohjelmisto näyttää:</h3>
            <img className="firstPic" src={photo} alt="image"/>
        </div>
    )
}

export default InformationPage