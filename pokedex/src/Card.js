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
        front: '',
        back: ''
    });

    let fetchData = (pokemonName) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
            .then(res => res.json())
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    type: res.types.map(el => el.type.name),
                    front: res.sprites.front_default,
                    back: res.sprites.back_default,
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


    if (query.get('pokemon')) {
        return (
            <div className="desc-pokemon">
                <div className="infos-pokemon">
                    <h1>{pokemon.name} - ID : {pokemon.id}</h1>
                    <div>
                        <ul>
                            {[...pokemon.type].map(el => <li key={el}>{el}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="images-pokemon">
                    <div className="infos-pokemon-front"><img src={pokemon.front} alt="The front of the pokemon" /></div>
                    <div className="infos-pokemon-back"><img src={pokemon.back} alt="The back of the pokemon" /></div>
                </div>
            </div>
        );

    } else {
        return (
            <div>
                <div className="failed-card-header">
                    <div className="warning">
                        <img src="images/warning.png" alt="Logo of a warning" />
                        <h1>You've entered an invalid Pokémon or no Pokémon at all !</h1>
                        <img src="images/warning.png" alt="Logo of a warning" />
                    </div>
                    <div>Please enter a valid Pokémon in the search bar.</div>
                </div>
            </div>
        );
    }
}

export default Card;