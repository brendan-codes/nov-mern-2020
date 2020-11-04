import React, {useState} from 'react';
import Form from './components/Form';
import { Link, navigate, Router } from '@reach/router';
import Show from './components/Show';
import Pokemon from './components/Pokemon';

function App() {
  const [items, setItems] = useState(["example!", "other example!"])
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const searchPokemon = (e) => {
    console.log(search);
    navigate(`/pokemon/${search}`)
    setSearch("");
  }

  return (
    <div>
      <div>
        <p><Link to={"/"}>Home!</Link></p>
        <p><Link to={"/create"}>Create new!</Link></p>
        <p><input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}>
            </input>
            <button onClick={searchPokemon}>Search</button>
        </p>
      </div>
      <Router>
        <Show items={items} path="/"/>
        <Form addItem={addItem} path="/create"/>
        <Pokemon path="/pokemon/:search" />
      </Router>
    </div>
  );
}

export default App;
