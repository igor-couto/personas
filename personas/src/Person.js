import React from "react";

const Person = ({name, lastname, gender, origin}) => {
    return(
        <div>
            <h1>{name + ' ' + lastname}</h1>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
        </div>
    );
};

export default Person;