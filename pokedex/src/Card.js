import React, { useState, useEffect } from 'react';
import './Card.css';
import {
    useLocation,
} from "react-router-dom";

function Card() {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        type: [],
        image: ''
    });

    let fetchData = (pokemonName) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
            .then(res => res.json())
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    type: res.types.map(el => el.type.name),
                    image: res.sprites.front_default
                },
                )
                return res;
            })
            .catch(err => console.log('An error occurred : ' + err));
    }

    let query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        const pokemonFetched = query.get('pokemon');
        fetchData(pokemonFetched);
    }, []);

    return (
        <div>
            Hello {pokemon.name}
            <img src={pokemon.image} alt='toto' />
        </div>
    );

}

export default Card;