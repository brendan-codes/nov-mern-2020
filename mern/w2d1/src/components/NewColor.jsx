import React, {useState} from 'react';



const NewColor = (props) => {

    const [color, setColor] = useState("");
    const [task, setTask] = useState("");

    const createColor = (event) => {
        event.preventDefault();
        props.addColor({hue: color, task: task, completed: false});
        setColor("");
        setTask("");
    }

    // const colorChanger = (e) => {
    //     setColor(e.target.value);
    // }

    return (
        <div>
            <p>Hello this is the NewColor component!</p>
            <h1>YOUR COLOR IS: {color}</h1>
            <form onSubmit={createColor}>
                <p>
                    Color: <input
                            type="text"
                            value={color}
                            onChange={e => setColor(e.target.value)}
                        />
                </p>
                <p>
                    Task: <input
                            type="text"
                            value={task}
                            onChange={e => setTask(e.target.value)}
                        />
                </p>
                <input type="submit" value="Add a color!" />
            </form>
        </div>
    )
}

export default NewColor;