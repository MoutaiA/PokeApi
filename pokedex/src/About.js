import React from 'react';
import './About.css';

function About() {
    return (
        <div>
            <div className="container-about">
                <div className="item">
                    <h1>About</h1>
                </div>
                <div className="item">
                    <h2>Overview</h2>
                    <div>
                        This project is a <strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication (<strong>SPA</strong>) where you can fetch some information from the PokéDex about any Pokémon you'll search !
                </div>
                </div>
                <div className="item">
                    <h2>Why this site ?</h2>
                    <div>Well, because, I wanted to become more confident in React, and learn some tools and libraries, like React-Router, or even Redux, and this project is a support for that.</div>
                </div>
                <div className="item">
                    <h2>Stack</h2>
                    <div>
                        <ul>
                            <li>React : 17.0.1</li>
                            <li>React-Router : 5.2.0</li>
                            <li>Redux : 1.5.0</li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <h2>Features</h2>
                    <div>
                        <h3>This is the list of the features who have been already implemented :</h3>
                        <ul>
                            <li>Some pages (Homepage, Card, About)</li>
                            <li>A routing system for navigating through the website</li>
                            <li>Being able to search and fetch data from a specific Pokémon</li>
                            <li>A fancy page listing some specific information about the Pokémon choose</li>
                            <li>A 404 page !</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default About;