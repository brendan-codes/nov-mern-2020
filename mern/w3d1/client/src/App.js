import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Main from './components/Main';

function App() {
  const [message, setMessage] = useState("...loading!");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9998/products")
      .then(response => {
        console.log(response);
        // setMessage(response.data.message);
        setProducts(response.data);
      })
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
