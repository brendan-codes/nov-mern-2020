import React, {useState} from 'react';
import Colors from './Colors';
import NewColor from './NewColor';



const ColorList = () => {

    const [colors, setColors] = useState([{task: "update stuff", hue: "red", completed: true}]);

    const addColor = (color) => {
        setColors([...colors, color]);
    }

    const deleteColor = (idx) => {
        setColors(colors.filter(color => color !== colors[idx]));
    }

    const updateCompleted = (idx) => {
        let copies = [...colors];
        copies[idx].completed = !copies[idx].completed;
        setColors(copies);
    }


    return (
        <div>
            <p>Hello this is the ColorList component!</p>

            <NewColor addColor={addColor}/>
            <Colors
                colors={colors}
                deleteColor={deleteColor}
                updateCompleted={updateCompleted}
            />
        </div>
    )
}

export default ColorList;