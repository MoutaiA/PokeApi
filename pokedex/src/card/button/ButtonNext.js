import React from 'react';
import {
    Link,
} from "react-router-dom";

function ButtonNext(props) {
    let handleNext = () => {
        let id = props.pokemon.id === 151 ? 1 : props.index + 1;
        props.setIndex(id)
    }

    return (
        <Link onClick={() => handleNext()} to={`/card?id=${props.pokemon.id + 1}`}>Next</Link>
    );
}

export default ButtonNext