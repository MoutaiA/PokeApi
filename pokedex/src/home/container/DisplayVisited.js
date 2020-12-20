import React from 'react';
import Visited from './Visited';

function DisplayVisited(props) {

    const generateVisited = () => {
        return new Array(3).fill().map((el, id) => <Visited key={id} />)
    }

    return (
        <section className={props.class}>
            <header className="container-title">{props.title}</header>
            {generateVisited()}
        </section>
    );
}

export default DisplayVisited