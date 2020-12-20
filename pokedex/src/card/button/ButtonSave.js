import React from 'react';

function ButtonSave(props) {

    let handleClick = () => {
        if (props.pokemon.name !== '') {
            const pokemonToSave = props.pokemon.name
            props.callback(pokemonToSave)
        }
    }

    return (
        <button onClick={() => handleClick()}>Save</button>
    );
}

export default ButtonSave