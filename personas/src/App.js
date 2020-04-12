import React, {useEffect, useState} from 'react';
import Person from './Person';
import './App.css';

const App = () => 
{
  // States
  const [people, setPeople] = useState([]);
  const [showingPeople, setShowingPeople] = useState([]);
  const [search, setSearch] = useState('');

  useEffect( () => {
    getPeople();
  }, []);

  const getPeople = async () => {
    const responsePeople = await fetch("https://randomuser.me/api/?results=10", {method: 'GET'} );
    const dataPeople = await responsePeople.json();
    setPeople(dataPeople.results);
    setShowingPeople(dataPeople.results);


    console.log(dataPeople.results);
  };

  const updateSearch = event => {

    const searchedWord = event.target.value.toLowerCase();
    setSearch(event.target.value);

    const searchResult = [];
    
    people.forEach( person => {
      if(person.name.first.toLowerCase().includes(searchedWord) || person.name.last.toLowerCase().includes(searchedWord))
        searchResult.push(person);
    }); 
    
    setShowingPeople(searchResult);

    if(search === '') setShowingPeople(people);      
  };

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      </form>
      <div className = "person">
      {showingPeople.map( person => (
        <Person 
          key = {person.name.first + person.name.last}
          name = {person.name.first}
          lastname = {person.name.last}
          gender = {person.gender}
          origin = {person.location.country}
          photo = "aa"
        />
      ))}
      </div>
    </div>
  );
}

export default App;