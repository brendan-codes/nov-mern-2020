import { Link } from '@reach/router';
import React from 'react';


const List = ({shoes}) => {
    return (
        <div>
            <Link to={"/new"}>Add new!</Link>
            {
                shoes.map((shoe, index) =>

                    <div key={index}>
                            <h4>Name: <Link to={`/show/${shoe._id}`}>{shoe.name}</Link></h4>
                            <p>Size: {shoe.size}</p>
                            <p>Color: {shoe.color}</p>
                            <p>Brand: {shoe.brand}</p>
                            <hr />
                    </div>

                )
            }
        </div>
    )
}

export default List;