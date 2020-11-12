import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


const Create = ({addProduct}) => {

    const [name,  setName] = useState("");
    const [price,  setPrice] = useState(0);

    const [errors, setErrors] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();

        // submit new product
        const product = {name: name, price: price};

        axios.post("http://localhost:9998/products", product)
            .then(res => { // success!
                addProduct(res.data);
                navigate("/");
            })
            .catch(err => { // failure :(
                const errs = err.response.data.errors;

                const keys = Object.keys(errs);
                const newErrors = [];

                for(let error of keys) {
                    newErrors.push(errs[error].message)
                }

                console.log(newErrors);
                setErrors(newErrors);
            })
    }

    return (
        <div>
            <Link to={"/"}>All products!</Link>
            <p>Create!</p>
            {
                errors.map((val, i) =>
                    <p key={i}>{val}</p>
                )
            }
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