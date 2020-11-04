import React, {useState} from 'react';
import Form from './components/Form';
import { Link, Router } from '@reach/router';
import Show from './components/Show';
import Pokemon from './components/Pokemon';

function App() {


  const [items, setItems] = useState(["example!", "other example!"])

  const addItem = (item) => {
    setItems([...items, item]);
  }

  return (
    <div>
      <div>
        <p><Link to={"/"}>Home!</Link></p>
        <p><Link to={"/create"}>Create new!</Link></p>
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
