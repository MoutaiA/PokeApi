import React, { useState } from 'react';
import './Search.css';
import {
    Link,
} from "react-router-dom";


function Search(props) {
    const [pokemon, setPokemon] = useState('');

    let handleChange = (event) => {
        setPokemon(event.target.value.toLowerCase());
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        if (pokemon !== null && pokemon !== undefined && pokemon !== '') {
            const pokemonName = pokemon;
            props.fetchData(pokemonName);
        } else {
            console.log('You didn\'t entered a valid character or it\'s empty !');
        }
    }

    return (
        <div>
            <form className="search-input" onSubmit={handleSubmit.bind(this)}>
                <input type="text" value={pokemon} onChange={handleChange.bind(this)} placeholder="Pikachu, Mew, Charmander, etc ..." />
               <Link to={`/card?pokemon=${pokemon}`}><button type="submit" value={pokemon}>Catch 'em all !</button></Link>
            </form>
        </div>
    )
}

export default Search;