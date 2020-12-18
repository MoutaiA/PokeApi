import React from 'react';
import './Homepage.css';
import Container from '../home/Container';
import Carousel from './Carousel';

function Homepage(props) {
    return (
        <div className="container-homepage">
            <Carousel />
            <div className="card-container">
                <Container className="highlight" title="Highlight" />
                <Container className="last-visited" title="Last visited"  />
                <Container className="favorite" title="Favorites" pokemon={props.savedPokemon} />
            </div>
        </div>
    )
}

export default Homepage;