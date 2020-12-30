import React from 'react';
import Visited from './Visited';
import UnvisitedDisplay from './UnvisitedDisplay';

function DisplayVisited(props) {

    const componentToDisplay = () => {
        if(props.visitedPokemon.length > 0) {
            return props.visitedPokemon.map((el, id) => <Visited key={id} pokemon={el} />)
        }

        return <UnvisitedDisplay />
    }

    return (
        <section className={props.class}>
            <header className="container-title">{props.title}</header>
            {componentToDisplay()}
        </section>
    );
}

export default DisplayVisited