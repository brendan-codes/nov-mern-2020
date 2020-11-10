import { Link } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


const Display = ({id}) => {

    const [product, setProduct] = useState({
        name: "",
        price: 0
    });

    useEffect(() => {
        axios.get(`http://localhost:9998/products/${id}`)
            .then(res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <p>This is {product.name}</p>
            <p>This costs {product.price}</p>
            <Link to={`/`}>Go back!</Link>
        </div>
    )
}

export default Display;