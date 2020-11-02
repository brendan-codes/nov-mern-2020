import React from 'react';



const Color = ({color, idx, deleteColor}) => {

    return (
        <div>
            <section style={{color: color}}>
                This color is: {color} |
                <button onClick={e => deleteColor(idx)}>Delete!</button>
                <input type="checkbox"/>
            </section>
        </div>
    )
}

export default Color;