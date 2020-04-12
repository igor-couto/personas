import React from "react";
import style from './Person.module.css';

const Person = ({name, lastname, gender, origin, photo}) => {
    return(
        <div className={style.person}>
            <h1>{name + ' ' + lastname}</h1>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
            {photo}
        </div>
    );
};

export default Person;