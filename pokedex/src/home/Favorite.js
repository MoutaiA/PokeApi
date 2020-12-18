import React, { useState, useEffect } from 'react';
import fetchPokemon from '../helper/fetchPokemon'
import {
    Link,
} from "react-router-dom";


function Favorite(props) {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        front: '',
    });

    useEffect(() => {
        const req = props.pokemon
        fetchPokemon(req)
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    front: res.sprites.front_default,
                })
            })
    }, [props.pokemon])

    return (
        <Link to={`/card?pokemon=${pokemon.name}`}>
            <div className="container-body">
                <h5>{pokemon.name.toUpperCase()} - {pokemon.id}</h5>
                <img src={pokemon.front} alt="Front of the Pokémon" />
            </div>
        </Link>
    );
}

export default Favorite