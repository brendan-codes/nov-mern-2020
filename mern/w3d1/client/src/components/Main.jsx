import React, {useEffect, useState} from 'react';
import { Router } from '@reach/router';
import List from './List';
import Create from './Create';
import axios from 'axios';


const Main = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9998/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
    }, [])

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    const deleteLocal = (id) => {
        setProducts(products.filter(product => product._id !== id));
    }

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:9998/products/${id}`)
            .then(response => {
                // console.log(response);
                deleteLocal(id);
            })
    }

    return (
        <div>
            <Router>
                <List path="/" products={products} deleteProduct={deleteProduct}/>
                <Create path="/new" addProduct={addProduct} />
            </Router>
        </div>
    )
}

export default Main;