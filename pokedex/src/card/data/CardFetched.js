import React from 'react';
import Buttons from '../button/Buttons';
import CardImages from './CardImages';
import CardInfo from './CardInfo';

function CardFetched(props) {

    return (
        <div className="desc-pokemon">
            <CardInfo pokemon={props.pokemon} />
            <CardImages pokemon={props.pokemon} />
            <Buttons index={props.index} setIndex={props.setIndex} callback={props.callback} pokemon={props.pokemon} />
        </div>
    );
}

export default CardFetched