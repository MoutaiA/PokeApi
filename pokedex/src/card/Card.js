import React, { useState, useEffect } from 'react';
import './Card.css';
import CardFailedLoading from './CardFailedLoading'
import fetchPokemon from '../helper/fetchPokemon';
import {
    Link,
} from "react-router-dom";

function Card(props) {

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        type: [],
        front: '',
        back: ''
    });
    const [index, setIndex] = useState(pokemon.id)
    const [isValidPokemon, setValidPokemon] = useState(false)

    let handlePrev = () => {
        let id = pokemon.id === 1 ? 151 : index - 1;
        setIndex(id)
    }

    let handleNext = () => {
        let id = pokemon.id === 151 ? 1 : index + 1;
        setIndex(id)
    }

    useEffect(() => {
        const req = index !== pokemon.id ? index : props.param
        fetchPokemon(req)
            .then(res => {
                console.log(res);
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
    }, [index, props.param, pokemon.id])

    if (isValidPokemon) {
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
                <div className="button-card">
                    <form action="/card">
                        <Link onClick={() => handlePrev()} to={`/card?id=${pokemon.id - 1}`}>Previous</Link>
                        <Link onClick={() => handleNext()} to={`/card?id=${pokemon.id + 1}`}>Next</Link>
                    </form>
                </div>
            </div>
        );

    } else {
        return (
            <CardFailedLoading />
        );
    }
}

export default Card;