import React from "react";
import style from "./PersonLocation.module.css";

const PersonLocation = ({flag, origin, state, city}) => {
    return(
        <div className={style.location}>
            <div className={style.flag}>
                <img src={flag} width="32" alt="flag"/>
            </div>
            <div className={style.origininfo}>
                <p>Origin: {origin}</p>
                <p>State/Province: {state}</p>
                <p>City: {city}</p>
            </div>
        </div>
    );
};

export default PersonLocation;