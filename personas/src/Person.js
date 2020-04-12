import React from "react";
import style from './Person.module.css';

const Person = ({name, lastname, gender, origin, photo, wondering, feelLike}) => {
    return(
        <div className={style.person}>
            <object className="emb" data={photo} width="100" height="100" type="image/svg+xml"></object>
            <h1>{name + ' ' + lastname}</h1>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
            <p>{feelLike}</p>
            <p>{wondering}</p>
        </div>
    );
};

export default Person;