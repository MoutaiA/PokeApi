import React, { useState } from 'react';
import './Search.css';

function Search() {
    const [pokemon, setPokemon] = useState('');

    let handleChange = (event) => {
        setPokemon(event.target.value.toLowerCase());
    }

    return (
        <div>
            <form action="/card" method="get" className="search-input">
                <input type="text" name="pokemon" value={pokemon} onChange={handleChange.bind(this)} placeholder="Pikachu, Mew, Charmander, etc ..." />
                <button type="submit" value={pokemon}>Catch 'em all !</button>
            </form>
        </div>
    )
}

export default Search;