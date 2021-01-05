import React, { useState, useEffect } from 'react';
import {
    Link,
} from "react-router-dom";
import fetchPokemon from '../../helper/fetchPokemon'

function ButtonNext(props) {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        image: ''
    })

    useEffect(() => {
        fetchPokemon(props.pokemon.id + 1)
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    image: res.sprites.front_default,
                })
            })
    }, [props.pokemon.id])

    let handleNext = () => {
        let id = props.pokemon.id === 151 ? 1 : props.index + 1;
        props.setIndex(id)
    }

    return (
        <div>
            <Link onClick={() => handleNext()} to={`/card?id=${props.pokemon.id + 1}`}>
                <div className="pokemon-info next">
                    <div>
                        <div>{pokemon.name}</div>
                        <div>{pokemon.id}</div>
                    </div>
                    <div><img src={pokemon.image} alt="Next Pokémon" /></div>
                </div>
                <div className="cursor-next">►</div>
            </Link>
        </div>
    );
}

export default ButtonNext