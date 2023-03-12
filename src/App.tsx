import React, { useEffect, useState, ChangeEvent } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { getData } from './utils/data.utils';
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);


  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFileredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFileredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1> My Happy Monsters</h1>
      <SearchBox
        placeholder="Search Monsters"
        handleChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );

}

export default App;