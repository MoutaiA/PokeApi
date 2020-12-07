import React from 'react';
import './Header.css';
import Menu from './Menu';

class Header extends React.Component {
    render() {
        return (
            <header class="header-container">
                <div class="header-logo">
                    <img alt="Logo of the PokeAPI" src="images/logo.png" />
                </div>
                <Menu />
            </header>
        );
    }
}

export default Header;