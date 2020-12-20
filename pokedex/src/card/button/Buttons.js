import React from 'react';
import ButtonPrev from './ButtonPrev';
import ButtonNext from './ButtonNext';
import ButtonSave from './ButtonSave'

function Buttons(props) {

    return (
        <div className="button-card">
            <ButtonSave callback={props.callback} pokemon={props.pokemon} />
            <ButtonPrev index={props.index} setIndex={props.setIndex} pokemon={props.pokemon} />
            <ButtonNext index={props.index} setIndex={props.setIndex} pokemon={props.pokemon} />
        </div>
    );
}

export default Buttons