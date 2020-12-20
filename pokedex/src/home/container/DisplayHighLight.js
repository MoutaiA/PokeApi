import React from 'react';
import HighLight from './HighLight';

function DisplayHighLight(props) {
    const generateHighLight = () => {
        return new Array(3).fill().map((el, id) => <HighLight key={id} />)
    }

    return (
        <section className={props.class}>
            <header className="container-title">{props.title}</header>
            {generateHighLight()}
        </section>
    );
}

export default DisplayHighLight