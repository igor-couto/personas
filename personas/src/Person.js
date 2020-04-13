import React from "react";
import style from './Person.module.css';
import MaleIcon from './male.svg';
import FemaleIcon from './female.svg';

const Person = ({name, lastname, gender, origin, photo, wondering, feelLike, flag, state, city}) => {
    return(
        <div className={style.person}>

            <div className={style.photo}>
                <object className="emb" data={photo} width="100" height="100" type="image/svg+xml"></object>
            </div>
            <h1>{name + ' ' + lastname} <object data={gender === 'female'? FemaleIcon : MaleIcon} width="18" height="18" type="image/svg+xml"></object></h1> 

            <div className={style.location}>
                <div className={style.flag}>
                    <img src={flag} width="32"/>
                </div>
                <div className={style.origininfo}>
                    <p>Origin: {origin}</p>
                    <p>State/Province: {state}</p>
                    <p>City: {city}</p>
                </div>
            </div>
            
            <p>Feeling like: {feelLike}</p>
            <p>Wondering: {wondering}</p>
        </div>
    );
};

export default Person;