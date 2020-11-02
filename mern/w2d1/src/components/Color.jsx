import React from 'react';



const Color = ({color, idx, deleteColor, updateCompleted}) => {

    return (
        <div>
            <section style={{color: color.hue}}>
                {color.task}, {color.hue}, {color.completed.toString()}
                <button onClick={e => deleteColor(idx)}>Delete!</button>
                <input
                    type="checkbox"
                    checked={color.completed}
                    onChange={e => updateCompleted(idx)}
                />
            </section>
        </div>
    )
}

export default Color;