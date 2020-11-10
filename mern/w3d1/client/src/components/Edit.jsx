
import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


const Edit = ({id, updateProduct}) => {

    const [name,  setName] = useState("");
    const [price,  setPrice] = useState(0);

    const [errors, setSerrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9998/products/${id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setPrice(res.data.price);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

     const formHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:9998/products/${id}`, {name: name, price: price})
            .then(res => {
                console.log(res);
                updateProduct(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Hello world!</h1>
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

export default Edit;