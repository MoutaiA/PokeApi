import React from 'react';
import Buttons from '../button/Buttons';
import CardImages from './CardImages';
import CardInfo from './CardInfo';

function CardFetched(props) {

    const formatType = () => {
        return props.pokemon.type.map((el, id) => id + 1 < props.pokemon.type.length ? el + ' - ' : el)
    }

    const formatHeight = () => {
        return <td>{(props.pokemon.height % 100) / 10} m</td>
    }

    const formatWeight = () => {
        return <td>{(props.pokemon.weight) / 10} kg</td>
    }

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
                <div className="aside-container-info">
                    <table>
                        <tbody>
                            <tr>
                                <th>Type</th>
                                <td>{formatType()}</td>
                            </tr>
                            <tr>
                                <th>Height</th>
                                {formatHeight()}
                            </tr>
                            <tr>
                                <th>Weight</th>
                                {formatWeight()}
                            </tr>
                            <tr>
                                <th>Experience</th>
                                <td>{props.pokemon.exp}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CardFetched