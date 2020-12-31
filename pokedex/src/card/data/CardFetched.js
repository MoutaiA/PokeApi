import React from 'react';
import Buttons from '../button/Buttons';
import CardImages from './CardImages';
import CardInfo from './CardInfo';

function CardFetched(props) {

    return (
        <div className="desc-pokemon">
            <div className="main-card-container">
                <div>
                    liste de lien
                </div>
                <div>desc</div>
                <div>image front/back</div>
                <div>stats</div>
                <div>évolution</div>

                <Buttons index={props.index} setIndex={props.setIndex} callback={props.callback} pokemon={props.pokemon} />
            </div>
            <div className="aside-container">
                <div className="aside-container-title">
                    <div>N° {props.pokemon.id}</div>
                    <div>{props.pokemon.name}</div>
                </div>
                <div className="aside-container-image">
                    <img src={props.pokemon.official} alt="Official pokemon" />
                </div>
                <div className="aside-container-info">info</div>
            </div>
        </div>
    );
}

export default CardFetched