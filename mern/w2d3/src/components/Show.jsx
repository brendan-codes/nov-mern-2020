import React from 'react';

const Show = ({items}) => {



    return(
        <div>
            <p>This is the Show component!</p>
            {
                items.map((val, idx) =>
                    <p key={idx}>{val}</p>
                )
            }
        </div>
    )
}

export default Show;