import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="pokeapi-ref">
                    <img src="images/logo.png" alt="PokéApi's logo" />
                    <a href="https://pokeapi.co/">Link to the PokéAPI</a>
                </div>
                <div className="contact">
                    <a href="https://github.com/MoutaiA"><img src="images/github-logo.png" alt="Github's logo" /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;