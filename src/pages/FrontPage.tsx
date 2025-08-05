import React from "react";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className="FirstHeader">Yksi työmaa, monta päästöä - laske määrä!</div>
        <p className="subHeading">Helppoa päästölaskentaa! Kaikki materiaalien päästöt yhdestä paikasta valmiiksi laskelmaksi.</p>
        <button className="register" onClick={() => {navigate('/uusi')}}>Kokeile maksutta!</button>
        </>
    )
}

export default FrontPage