import React, { useState, useEffect } from 'react';
import {
    Link,
} from "react-router-dom";
import fetchPokemon from '../../helper/fetchPokemon'

function ButtonPrev(props) {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        image: ''
    }, [props.pokemon.id])

    useEffect(() => {
        fetchPokemon(props.pokemon.id - 1)
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    image: res.sprites.front_default,
                })
            })
    })

    let handlePrev = () => {
        let id = props.pokemon.id === 1 ? 151 : props.index - 1;
        props.setIndex(id)
    }

    return (
        <div>
            <Link onClick={() => handlePrev()} to={`/card?id=${props.pokemon.id - 1}`}>
                <div className="cursor-prev">◄</div>
                <div className="pokemon-info prev">
                    <div><img src={pokemon.image} alt="Previous Pokémon" /></div>
                    <div>
                        <div>{pokemon.name}</div>
                        <div>{pokemon.id}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ButtonPrev