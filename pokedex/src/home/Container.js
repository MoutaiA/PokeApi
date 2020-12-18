import React, { useState, useEffect } from 'react';
import './Container.css'
import HighLight from './HighLight'
import Visited from './Visited'
import Favorite from './Favorite'

function Container(props) {

    const [favoritesPokemon, setFavoritesPokemon] = useState([])
    useEffect(() => {
        if (props.pokemon !== undefined) {
            const pokemonSet = new Set(props.pokemon)
            const slicedArray = [...pokemonSet].slice(Math.max([...pokemonSet].length - 3, 1))
            setFavoritesPokemon(slicedArray)
        }
    }, [props.pokemon])

    if (props.title === 'Highlight') {
        return (
            <section className={props.class}>
                <header className="container-title">{props.title}</header>
                <HighLight />
                <HighLight />
                <HighLight />
            </section>
        );
    }

    else if (props.title === 'Last visited') {
        return (
            <section className={props.class}>
                <header className="container-title">{props.title}</header>
                <Visited />
                <Visited />
                <Visited />
            </section>
        );
    }

    else {
        if (props.pokemon.length > 0) {
            return (
                <section className={props.class}>
                    <header className="container-title">{props.title}</header>
                    {[...favoritesPokemon].map(el => {
                        return <Favorite key={el} pokemon={el} />
                    })}
                </section>
            );
        } else {
            return (
                <section className={props.class}>
                    <header className="container-title">{props.title}</header>
                    <h3>No pokemon saved yet !</h3>
                </section>
            );
        }
    }
}


export default Container;