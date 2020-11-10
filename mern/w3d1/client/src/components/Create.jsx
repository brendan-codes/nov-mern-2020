import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


const Create = ({addProduct}) => {

    const [name,  setName] = useState("");
    const [price,  setPrice] = useState(0);

    const [errors, setSerrors] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();

        // submit new product
        console.log(name);
        console.log(price);

        const product = {name: name, price: price};

        axios.post("http://localhost:9998/products", product)
            .then(res => {
                addProduct(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            })
    }

    return (
        <div>
            <Link to={"/"}>All products!</Link>
            <p>Create!</p>
            <form onSubmit={formHandler}>
                <p>Name:</p>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <p>Price</p>
                <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <input type="submit" value="create product!" />
            </form>
        </div>
    )
}

export default Create;