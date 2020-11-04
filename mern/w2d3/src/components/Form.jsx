import { navigate } from '@reach/router';
import React, {useState} from 'react';

const Form = ({addItem}) => {

    const [itemInput, setItemInput] = useState("");

    // const navigateHandler = (e) => {
    //     navigate("/");
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        addItem(itemInput);
        navigate("/");
    }


    return(
        <div>
            <p>This is the Form component!</p>
            { itemInput }
            <form onSubmit={submitHandler}>
                <input type="text" value={itemInput} onChange={e => setItemInput(e.target.value)}/>
                <input type="submit" value="create item!"/>
            </form>
        </div>
    )
}

export default Form;