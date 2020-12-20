import React from 'react';
import './Card.css';
import CardFailedLoading from './data/CardFailedLoading'
import CardFetched from './data/CardFetched';

function Card(props) {

    const isValidPokemon = (isPokemonFounded) => {
        return isPokemonFounded ? true : false;
    };

    if (isValidPokemon) {
        return (
            <CardFetched callback={props.callback} />
        );

    } else {
        return (
            <CardFailedLoading />
        );
    }
}

export default Card;