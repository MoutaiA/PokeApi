import React from 'react';
import Buttons from '../button/Buttons';
import Aside from './Aside'

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
            <Aside pokemon={props.pokemon} />
        </div>
    );
}

export default CardFetched