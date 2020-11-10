import React, {useEffect, useState} from 'react';
import { Router } from '@reach/router';
import List from './List';
import Create from './Create';
import axios from 'axios';
import Display from './Display';
import Edit from './Edit';


const Main = (props) => {

    // state variables to keep track of data
    const [products, setProducts] = useState([]);

    // use effect to send an api call on page load
    useEffect(() => {
        axios.get("http://localhost:9998/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
    }, [])

    // methods to manipulate state data
    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    const removeProduct = (id) => {
        setProducts(products.filter(product => product._id !== id));
    }

    const updateProduct = (newProduct) => {
        setProducts(products.map(product => product._id === newProduct._id ? newProduct : product));
    }

    // api methods
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:9998/products/${id}`)
            .then(response => {
                removeProduct(id);
            })
    }

    // router
    return (
        <div>
            <Router>
                <List
                    path="/"
                    products={products}
                    deleteProduct={deleteProduct}
                />
                <Create
                    path="/new"
                    addProduct={addProduct}
                />
                <Display
                    path="/show/:id"
                />
                <Edit
                    path="/edit/:id"
                    updateProduct={updateProduct}
                />
            </Router>
        </div>
    )
}

export default Main;