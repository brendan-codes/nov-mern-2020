import { navigate } from '@reach/router';
import React, {useState} from 'react';

const Form = ({addItem}) => {

    const [itemInput, setItemInput] = useState("");
    const [itemError, setItemError] = useState("");

    // const navigateHandler = (e) => {
    //     navigate("/");
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        let valid = true;

        if(itemInput.length < 2){
            valid = false;
            setItemError("Item is too short!")
        }

        if(itemInput.length > 15){
            valid = false;
            setItemError("Item is too long!!")
        }


        if(valid){
            addItem(itemInput);
            navigate("/");
        }
    }


    return(
        <div>
            <p>This is the Form component!</p>
            { itemInput }
            <form onSubmit={submitHandler}>
                <input type="text" value={itemInput} onChange={e => setItemInput(e.target.value)}/>
                <div class="id">{  itemError }</div>
                <input type="submit" value="create item!"/>
            </form>
        </div>
    )
}

export default Form;