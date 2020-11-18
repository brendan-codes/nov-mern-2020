import React, {useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Create = ({addShoes}) => {

    const [name, setName] = useState("");
    const [size, setSize] = useState(4);
    const [color, setColor] = useState("");
    const [brand, setBrand] = useState("");

    const [errorMessages, setErrorMessages] = useState([]);

    const [sizes] = useState([4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13]);

    const handler = (event) => {
        event.preventDefault();
        const newShoes = {name: name, size: size,color: color, brand: brand};

        let formErrors = false;
        let messageErrors = [];

        if(name.length < 2){
            formErrors = true;
            messageErrors.push("Name is too short!")
        }

        if(name.length > 8){
            formErrors = true;
            messageErrors.push("Name is too long!")
        }

        if(!formErrors){
            axios.post("http://localhost:8008/shoes", newShoes)
                .then(res => {
                    console.log(res);
                    addShoes(res.data);
                    navigate("/");
                })
                .catch(err => {
                    console.log(err.response.data);

                    const { errors } = err.response.data;
                    setErrorMessages(Object.keys(errors).map(error => errors[error].message));
                })
        }else{
            // show errors
        }
    }

    return (
        <div>
            <Link to={"/"}>Show all!</Link>

            {
                errorMessages.map((val, i) =>
                    <p key={i}>{val}</p>
                )
            }

            <form onSubmit={handler}>
                <p>Name: </p>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <p>Size:</p>
                <select value={size} onChange={e => setSize(e.target.value)}>
                    {
                        sizes.map((size, i) =>

                            <option key={i} value={size}>{size}</option>

                        )
                    }
                </select>

                <p>Color: </p>
                <input type="text" value={color} onChange={e => setColor(e.target.value)} />

                <p>Brand: </p>
                <input type="text" value={brand} onChange={e => setBrand(e.target.value)} />

                <input type="submit" value="Click me to create and add awesome shoes!" />
            </form>
        </div>
    )
}

export default Create;