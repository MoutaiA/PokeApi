import React, { useState, useEffect } from 'react';
import fetchPokemon from '../../helper/fetchPokemon';
import Buttons from '../button/Buttons';
import CardImages from './CardImages';
import CardInfo from './CardInfo';

function CardFetched(props) {
    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        type: [],
        front: '',
        back: ''
    });

    const [index, setIndex] = useState(pokemon.id)
    const [isValidPokemon, setValidPokemon] = useState(false)

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

    return (
        <div className="desc-pokemon">
            <CardInfo pokemon={pokemon} />
            <CardImages pokemon={pokemon} />
            <Buttons index={index} setIndex={setIndex} callback={props.callback} pokemon={pokemon} />
        </div>
    );
}

export default CardFetched