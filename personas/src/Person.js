import React from "react";

const Person = ({name, lastname}) => {
    return(
        <div>
            <h1>{name + ' ' + lastname}</h1>
        </div>
    );
};

export default Person;