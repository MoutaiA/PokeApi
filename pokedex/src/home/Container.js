import React from 'react';
import './Container.css'
import HighLight from './HighLight'
import Visited from './Visited'
import Favorite from './Favorite'

function Container(props) {

    if (props.title === 'Highlight') {
        return (
            <section className={props.class}>
                <header className="container-title">{props.title}</header>
                <HighLight />
                <HighLight />
                <HighLight />
            </section>
        );
    }

    else if (props.title === 'Last visited') {
        return (
            <section className={props.class}>
                <header className="container-title">{props.title}</header>
                <Visited />
                <Visited />
                <Visited />
            </section>
        );
    }

    else {
        return (
            <section className={props.class}>
                <header className="container-title">{props.title}</header>
                <Favorite />
                <Favorite />
                <Favorite />
            </section>
        );
    }
}


export default Container;