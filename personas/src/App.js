import React, {useEffect, useState} from 'react';
import Person from './Person';
import './App.css';

const App = () => 
{

  const [people, setPerson] = useState([]);

  const exampleRequest = "https://randomuser.me/api/?results=10";

  useEffect( () => {
    getFaces();
  }, []);

  const getFaces = async () => {
    const response = await fetch(exampleRequest, {method: 'GET'} );
    const data = await response.json();

    console.log(data.results);

    setPerson(data.results);
  };

  return(
    <div className="App">
      <form className="search-form">
        <input className="seach-bar" type="text"/>
        <button className="seach-buttom" type="submit">Search</button>
      </form>
      {people.map( person => (
        <Person 
          key = {person.name.first + person.name.last}
          name = {person.name.first}
          lastname = {person.name.last}
        />
      ))}
    </div>
  );
}

export default App;
