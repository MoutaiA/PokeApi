import React, { useState, useEffect } from 'react';
import fetchPokemon from '../../helper/fetchPokemon'
import {
    Link,
} from "react-router-dom";

function HighLight() {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        front: '',
    });

    useEffect(() => {
        const req = parseInt(Math.random() * (151 - 1) + 1);
        fetchPokemon(req)
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    front: res.sprites.front_default,
                })
            })
    }, [])

    return (
        <Link to={`/card?pokemon=${pokemon.name}`}>
            <div className="container-body">
                <h5>{pokemon.name.toUpperCase()} - {pokemon.id}</h5>
                <img src={pokemon.front} alt="Front of the Pokémon" />
            </div>
        </Link>
    );
}

export default HighLight