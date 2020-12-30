import React from 'react';
import './Homepage.css';
import DisplayHighLight from './container/DisplayHighLight';
import DisplayVisited from './container/DisplayVisited';
import DisplayFavorite from './container/DisplayFavorite';
import Carousel from './Carousel';
import './Container.css'

function Homepage(props) {
    return (
        <div className="container-homepage">
            <Carousel />
            <div className="card-container">
                <DisplayHighLight className="highlight" title="Highlight" />
                <DisplayVisited className="last-visited" title="Last visited" visitedPokemon={props.visitedPokemon}  />
                <DisplayFavorite className="favorite" title="Favorites" pokemon={props.savedPokemon} />
            </div>
        </div>
    )
}

export default Homepage;