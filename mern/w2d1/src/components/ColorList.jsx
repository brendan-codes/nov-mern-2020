import React, {useState} from 'react';
import Colors from './Colors';
import NewColor from './NewColor';



const ColorList = () => {

    const [colors, setColors] = useState(["red", "green", "orange"]);

    const addColor = (color) => {
        setColors([...colors, color]);
    }

    const deleteColor = (idx) => {
        setColors(colors.filter(color => color !== colors[idx]));
    }


    return (
        <div>
            <p>Hello this is the ColorList component!</p>

            <NewColor addColor={addColor}/>
            <Colors colors={colors} deleteColor={deleteColor}/>
        </div>
    )
}

export default ColorList;