import { Link, navigate } from '@reach/router';
import React, {useEffect, useState} from 'react';


const List = ({products, deleteProduct}) => {


    const navigateToEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    return (
        <div>
            <Link to={'/new'}>Add a new product!</Link>
            {
                products.map((product, idx) =>
                    <div key={idx}>
                        <p>Product name: <Link to={`/show/${product._id}`}>{product.name}</Link></p>
                        <p>Product price: {product.price}</p>
                        <button onClick={e => navigateToEdit(product._id)}>Edit</button>
                        <button onClick={e => deleteProduct(product._id)}>Delete</button>
                        <hr />
                    </div>
                )
            }
        </div>
    )
}

export default List;