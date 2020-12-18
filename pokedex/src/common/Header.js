import React from 'react';
import './Header.css';
import {
    Link,
} from "react-router-dom";

function Header() {
    return (
        <header className="header-container">
            <div className="header-logo">
                <Link to="/"><img alt="Logo of the PokeAPI" src="images/logo.png" /></Link>
            </div>
            <nav className="nav-bar">
                <Link to="/" className="nav-bar-menu">Home</Link>
                <Link to="/about" className="nav-bar-menu">About</Link>
            </nav>
        </header>
    );
}

export default Header;