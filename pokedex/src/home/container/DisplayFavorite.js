import React, { useState, useEffect } from 'react';
import Favorite from './Favorite';
import UnsavedDisplay from './UnsavedDisplay';

function DisplayFavorite(props) {

    const [favoritesPokemon, setFavoritesPokemon] = useState([])
    useEffect(() => {
        if (props.pokemon !== undefined) {
            const pokemonSet = new Set(props.pokemon)
            const req = pokemonSet.size > 3 ? [...pokemonSet].slice(Math.max([...pokemonSet].length - 3, 1)) : pokemonSet
            setFavoritesPokemon(req)
        }
    }, [props.pokemon])

    const componentToDisplay = () => {
        if (props.pokemon.length > 0) {
            return [...favoritesPokemon].map((el, id) => {
                return <Favorite key={id} pokemon={el} />
            })
        } else {
            return <UnsavedDisplay />
        }
    }

    return (
        <section className={props.class}>
            <header className="container-title">{props.title}</header>
            {componentToDisplay()}
        </section>
    );
}

export default DisplayFavorite