import React, {useEffect, useState} from 'react';
import Person from './Person';
import './App.css';
import SearchIcon from './search-icon.svg';

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

    const responsePeople = await fetch("https://randomuser.me/api/?results=10&inc=gender,name,nat,location", {method: 'GET'} );
    const dataPeople = await responsePeople.json();

    dataPeople.results.map( person => {
      const completeName = person.name.first + ' ' + person.name.last;
      person.photo = `https://avatars.dicebear.com/v2/${person.gender}/${completeName}.svg?options[background][]=%2368e877&options[mood][]=happy`;

      person.flag = `https://hatscripts.github.io/circle-flags/flags/${person.nat.toLowerCase()}.svg`;
      //?options[background][]=%23d92518 red
      //?options[background][]=%2368e877 green
      //?options[background][]=%23e6e66e yellow
    });

    for(const person of dataPeople.results){
      const responseWondering = await fetch("https://www.boredapi.com/api/activity/");
      const dataWondering = await responseWondering.json();
      person.wondering = dataWondering.activity;
      person.feelLike = dataWondering.type;
    }

    setPeople(dataPeople.results);
    setShowingPeople(dataPeople.results);
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
        <label>
          <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search someone"/>
        </label>
      </form>
      <div className = "personCard">
      {showingPeople.map( person => (
        <Person 
          key = {person.name.first + person.name.last}
          name = {person.name.first}
          lastname = {person.name.last}
          gender = {person.gender}
          origin = {person.location.country}
          photo = {person.photo}
          wondering = {person.wondering}
          feelLike = {person.feelLike}
          flag = {person.flag}
          state = {person.location.state}
          city = {person.location.city}
        />
      ))}
      </div>
    </div>
  );
}

export default App;