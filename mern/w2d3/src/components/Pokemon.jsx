import React, {useEffect} from 'react';

const Pokemon = ({search, id}) => {

    useEffect(() => {
        console.log(search);
        console.log(id);
    }, []);

    return(
        <div>
            <p>This is the Pokemon component!</p>
        </div>
    )
}

export default Pokemon;