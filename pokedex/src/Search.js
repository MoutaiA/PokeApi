import React, { useState } from 'react';
import './Search.css';
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


function Search(props) {
    const [pokemon, setPokemon] = useState('');

    let handleChange = (event) => {
        setPokemon(event.target.value.toLowerCase());
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        const pkmn = pokemon;
        props.fetchData(pkmn);
    }

    return (
        <form className="search-input" onSubmit={handleSubmit.bind(this)}>
            <input type="text" value={pokemon} onChange={handleChange.bind(this)} placeholder="Pikachu, Mew, Charmander, etc ..." />
            <button type="submit" value={pokemon}>Catch 'em all !</button>
        </form>
    )
}

export default Search;