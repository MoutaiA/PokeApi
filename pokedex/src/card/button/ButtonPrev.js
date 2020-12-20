import React from 'react';
import {
    Link,
} from "react-router-dom";

function ButtonPrev(props) {
    let handlePrev = () => {
        let id = props.pokemon.id === 1 ? 151 : props.index - 1;
        props.setIndex(id)
    }

    return (
        <Link onClick={() => handlePrev()} to={`/card?id=${props.pokemon.id - 1}`}>Previous</Link>
    );
}

export default ButtonPrev