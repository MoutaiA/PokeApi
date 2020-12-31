import React, { useState, useEffect } from 'react';
import './Card.css';
import CardFailedLoading from './data/CardFailedLoading'
import CardFetched from './data/CardFetched';
import fetchPokemon from '../helper/fetchPokemon';

function Card(props) {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        type: [],
        front: '',
        back: ''
    });
    const [isValidPokemon, setValidPokemon] = useState(false)
    const [index, setIndex] = useState(pokemon.id)

    useEffect(() => {
        const req = index !== pokemon.id ? index : props.param
        fetchPokemon(req)
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    type: res.types.map(el => el.type.name),
                    front: res.sprites.front_default,
                    back: res.sprites.back_default,
                })
                setIndex(res.id)
                setValidPokemon(true)
            })
            .catch(err => {
                console.log(err);
                setValidPokemon(false)
            });


    }, [index, props.param, pokemon.id, props, isValidPokemon])


    if (isValidPokemon) {
        return (
            <CardFetched setIndex={setIndex} index={index} pokemon={pokemon} param={props.param} callback={props.callback} />
        );
    } else {
        return (
            <CardFailedLoading />
        );
    }
}

export default Card;