import React from 'react';

class Card extends React.Component {

    printTypes() {
        return this.props.pokemon.type.map((type, id) => {
            return <li key={id}>{type}</li>
        })
    }

    render() {
        if (!this.props.isLoading) {
            return (
                <div>Toto</div>
            )
        }
        return (
            <div>
                <div>{this.props.pokemon.name}</div>
                <div>{this.props.pokemon.id}</div>
                <ul>
                    {this.printTypes()}
                </ul>
                <img alt="The default pic of the pokemon" src={this.props.pokemon.image} />
            </div>
        );
    }
}

export default Card;