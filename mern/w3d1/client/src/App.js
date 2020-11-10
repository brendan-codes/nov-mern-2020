import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
      {message}
      <div>{
        products.map((value, index) =>
          <div key={index}>
            <p>id: {value._id}</p>
            <p>This is a {value.name} for {value.price}</p>
          </div>

        )}
      </div>
    </div>
  );
}

export default App;
