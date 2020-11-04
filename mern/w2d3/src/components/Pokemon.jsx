import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = ({search}) => {

    const [pokemon, setPokemon] = useState({name: "", sprites: {front_default: ""}})

    useEffect(() => {
        fetchPokemon(search);
    }, [search]);

    const fetchPokemon = (s) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${s}`)
            .then(res => {
                console.log(res);
                setPokemon(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <p>This is the Pokemon component!</p>
            <p>It's {pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt=""/>
        </div>
    )
}

export default Pokemon;