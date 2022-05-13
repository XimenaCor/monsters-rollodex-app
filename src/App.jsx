import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('rendered');

  // A useEffect takes two arguments, the first one is a callback and de second one is an array of dependencies
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, []);
  //WE DONT SET ANYTHING ON THE ARRAY BECAUSE WE DONT WANT THE COMPONENT TO REFETCH FOR ANY REASON

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
