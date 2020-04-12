import React from "react";
import style from './Person.module.css';

const Person = ({name, lastname, gender, origin, photo, wondering, feelLike, flag, state, city}) => {
    return(
        <div className={style.person}>

            <div className={style.photo}>
                <object className="emb" data={photo} width="100" height="100" type="image/svg+xml"></object>
            </div>
            <h1>{name + ' ' + lastname}</h1>


            <div>
                <p>Origin: {origin} <img src={flag} width="32"/></p>
                <p>State/Province: {state}</p>
                <p>City: {city}</p>
            </div>

            <div>
                <p>Gender: {gender}</p>
            </div>
            

            <p>Feeling like: {feelLike}</p>
            <p>Wondering: {wondering}</p>
        </div>
    );
};

export default Person;