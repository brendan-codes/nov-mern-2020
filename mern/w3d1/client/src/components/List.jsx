import { Link } from '@reach/router';
import React, {useEffect, useState} from 'react';


const List = ({products, deleteProduct}) => {

    return (
        <div>
            <Link to={'/new'}>Add a new product!</Link>
            {
                products.map((product, idx) =>
                    <div key={idx}>
                        <p>Product name: {product.name}</p>
                        <p>Product price: {product.price}</p>
                        <button>Edit</button>
                        <button onClick={e => deleteProduct(product._id)}>Delete</button>
                        <hr />
                    </div>
                )
            }
        </div>
    )
}

export default List;