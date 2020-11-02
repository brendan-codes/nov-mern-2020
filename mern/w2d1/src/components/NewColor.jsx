import React, {useState} from 'react';



const NewColor = (props) => {

    const [color, setColor] = useState("");

    const createColor = (event) => {
        event.preventDefault();
        props.addColor(color);
        setColor("");
    }

    return (
        <div>
            <p>Hello this is the NewColor component!</p>
            <h1>YOUR COLOR IS: {color}</h1>
            <form onSubmit={createColor}>
                <input type="text" value={color} onChange={e => setColor(e.target.value)} />
                <input type="submit" value="Add a color!" />
            </form>
        </div>
    )
}

export default NewColor;