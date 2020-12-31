import React from 'react';
import './Homepage.css';
import DisplayHighLight from './container/DisplayHighLight';
import DisplayFavorite from './container/DisplayFavorite';
import Carousel from './Carousel';
import './Container.css'

function Homepage(props) {
    return (
        <div className="container-homepage">
            <Carousel />
            <div className="card-container">
                <DisplayHighLight className="highlight" title="Highlight" />
                <DisplayFavorite className="favorite" title="Favorites" pokemon={props.savedPokemon} />
            </div>
        </div>
    )
}

export default Homepage;