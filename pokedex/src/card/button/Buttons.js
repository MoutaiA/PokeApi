import React from 'react';
import ButtonPrev from './ButtonPrev';
import ButtonNext from './ButtonNext';
import ButtonSave from './ButtonSave'

function Buttons(props) {

    return (
        <div className="button-card">
            <div className="btn-save">
                <ButtonSave callback={props.callback} pokemon={props.pokemon} />
            </div>
            <div className="btn-change">
                <ButtonPrev index={props.index} setIndex={props.setIndex} pokemon={props.pokemon} />
                <ButtonNext index={props.index} setIndex={props.setIndex} pokemon={props.pokemon} />
            </div>
        </div>
    );
}

export default Buttons