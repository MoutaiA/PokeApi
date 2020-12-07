import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <nav className="nav-bar">
                <a href="" class="nav-bar-menu">Home</a>
                <a href="" class="nav-bar-menu">About</a>
                <a href="" class="nav-bar-menu">Github</a>
            </nav>
        );
    }
}

export default Menu;