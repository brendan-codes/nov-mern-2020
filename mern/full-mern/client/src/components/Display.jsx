import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Display = ({id, deleteById}) => {

    const [shoes, setShoes] = useState({
        _id: "",
        name: "",
        size: 4,
        color: "",
        brand: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8008/shoes/${id}`)
            .then(res => {
                setShoes(res.data);
            })
    }, [id]);

    const deleteHandler = id => {
        deleteById(id);
        navigate("/");
    }


    return (
        <div>
            <Link to={'/'}>Go back!</Link>
            <p>Name: {shoes.name}</p>
            <p>_id: {shoes._id}</p>
            <p>size: {shoes.size}</p>
            <p>color: {shoes.color}</p>
            <p>brand: {shoes.brand}</p>
            <button onClick={e => deleteHandler(shoes._id)}>Delete me!</button>
        </div>
    )
}

export default Display;