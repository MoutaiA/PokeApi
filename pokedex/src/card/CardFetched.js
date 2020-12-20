import React, { useState, useEffect } from 'react';
import fetchPokemon from '../helper/fetchPokemon';
import Buttons from './button/Buttons';

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
           <Buttons index={index} setIndex={setIndex} callback={props.callback} pokemon={pokemon} />
        </div>
    );
}

export default CardFetched