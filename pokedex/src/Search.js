import React from 'react';
import './Search.css';

class Search extends React.Component {
    render() {
        return (
            <div className="nav">
                <input type="text" placeholder="Pikachu, Mew, Charmander" />
                <button><span className="button-search">Catch 'em all ! </span>Search</button>
            </div>
        )
    }
}

export default Search;