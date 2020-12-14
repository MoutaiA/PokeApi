import React from 'react';
import './Homepage.css';
import Search from './Search';
import Container from './Container';

function Homepage() {
    return (
        <main>
            <div className="container">
                <div className="nav">
                    <Search />
                </div>
                <div className="card-container">
                    <Container className="highlight" title="Highlight" />
                    <Container className="last-visited" title="Last visited" />
                    <Container className="favorite" title="Favorites" />
                </div>
            </div>
        </main>
    )
}

export default Homepage;