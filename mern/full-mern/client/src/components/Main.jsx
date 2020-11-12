import React, {useState, useEffect} from 'react';
import { Router } from '@reach/router';
import List  from './List';
import Display  from './Display';
import Create  from './Create';
// import Edit from './Edit';
import axios from 'axios';


const Main = (props) => {

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8008/shoes")
            .then(res => {
                console.log(res);
                setShoes(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const deleteById = (id) => {
        axios.delete(`http://localhost:8008/shoes/${id}`)
            .then(res => {
                console.log(res);
                removeShoe(id);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const removeShoe = (id) => {
        setShoes(shoes.filter(shoe => shoe._id !== id));
    }

    const addShoes = (shoe) => {
        setShoes([...shoes, shoe]);
    }

    return (
        <div>
            <Router>
                <List path="/" shoes={shoes}/>
                <Create path="/new" addShoes={addShoes}/>
                <Display path="/show/:id" deleteById={deleteById}/>
                {/* <Edit path="/edit/:id" /> */}
            </Router>
        </div>
    )
}

export default Main;