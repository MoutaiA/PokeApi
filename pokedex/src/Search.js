import React from 'react';
import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
        }
    }

    handleChange(event) {
        this.setState({ pokemon: event.target.value.toLowerCase() });
    }

    handleSubmit(event) {
        event.preventDefault();
        const pokemon = this.state.pokemon;
        this.props.fetchData(pokemon);
    }

    render() {
        return (
            <form className="search-input" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" value={this.state.pokemon} onChange={this.handleChange.bind(this)} placeholder="Pikachu, Mew, Charmander, etc ..." />
                <button type="submit" value={this.state.pokemon}>Catch 'em all !</button>
            </form>
        )
    }
}

export default Search;