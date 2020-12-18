import React, { useState } from 'react';
import './Search.css';
import {
    Link,
} from "react-router-dom";

function Search() {
    const [pokemon, setPokemon] = useState('');

    let handleChange = (event) => {
        setPokemon(event.target.value.toLowerCase());
    }

    let handleClick = () => {
        setPokemon('')
    }

    return (
        <div>
            <form action="/card" method="get" className="search-input">
                <input type="text" name="pokemon" value={pokemon} onChange={handleChange.bind(this)} placeholder="Pikachu, Mew, Charmander, etc ..." />
                <Link onClick={handleClick.bind(this)} to={`/card?pokemon=${pokemon}`}>Catch 'em all !</Link>
            </form>
        </div>
    )
}

export default Search;