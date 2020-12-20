import React from 'react';

function CardImages(props) {

    return (
        <div className="images-pokemon">
            <div className="infos-pokemon-front"><img src={props.pokemon.front} alt="The front of the pokemon" /></div>
            <div className="infos-pokemon-back"><img src={props.pokemon.back} alt="The back of the pokemon" /></div>
        </div>
    );
}

export default CardImages