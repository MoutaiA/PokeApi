import React from 'react';
import './Homepage.css';
import Container from './Container';

function Homepage() {
    return (
        <div className="container">
            <div className="card-container">
                <Container className="highlight" title="Highlight" />
                <Container className="last-visited" title="Last visited" />
                <Container className="favorite" title="Favorites" />
            </div>
        </div>
    )
}

export default Homepage;