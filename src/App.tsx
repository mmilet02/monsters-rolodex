import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import { getData } from "./utils/data.utils";

import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filter, setFilter] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Array<Monster>>(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(users);
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      if (filter === "") {
        return true;
      }
      if (monster.name.toLowerCase().includes(filter)) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, filter]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        nameClass="monster-search-box"
        onChangeHandler={onChangeHandler}
        placeholder="search monsters"
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;
