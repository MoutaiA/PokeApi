import React from 'react';

function CardInfo(props) {

    return (
        <div className="infos-pokemon">
                <h1>{props.pokemon.name} - ID : {props.pokemon.id}</h1>
                <div>
                    <ul>
                        {[...props.pokemon.type].map(el => <li key={el}>{el}</li>)}
                    </ul>
                </div>
            </div>
    );
}

export default CardInfo