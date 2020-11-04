import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Api = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then(response => {
            console.log(response);
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemon(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }

    const alternativeGetPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
    }

    return (
        <div>
            <button onClick={getPokemon}>Get Pokemon!</button>
            <button onClick={alternativeGetPokemon}>Alt Get Pokemon!</button>
            {
                pokemon.map((val, idx) =>
                    <div key={idx}>{val.name}</div>
                )
            }
        </div>
    )
}

export default Api;