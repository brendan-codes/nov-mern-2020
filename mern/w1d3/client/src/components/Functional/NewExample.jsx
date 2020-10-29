import React, {useState} from 'react';


const NewExample = (props) => {

    const [name, setName] = useState("Brendan");
    const [names, setNames] = useState(["Grant", "Tony", "Claire", "Jan"]);

    const nameSetter = (e) => {
        setName("This is a new name now!");
    }

    // fat arrow functions
    // implicit return vs return
    // rest and spread operators
    // destructuring
    // jsx
    // callbacks
    // function programming (map, filter)



    return ( // jsx
        <div>
            <h1>Hello I am a functional component! Hello {name}</h1>
            <button onClick={nameSetter}>Click me to change your name!</button>
            {
                names.map((val, i) =>

                    <div key={i}>
                        <h1>Name: {val}</h1>
                    </div>

                )
            }
        </div>
    )
}

export default NewExample;