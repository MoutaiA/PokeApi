import React from 'react';
import './Homepage.css';
import Search from './Search';
import Card from './Card';
import Container from './Container';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {
                name: '',
                id: 0,
                type: [],
                image: ''
            },
            isLoading: false
        }
    }

    fetchData(pokemon) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pokemon: {
                        name: res.name,
                        id: res.id,
                        type: res.types.map(el => el.type.name),
                        image: res.sprites.front_default
                    },
                }, () => {
                    this.setState({ isLoading: true })
                });
                //console.log(res);
                return res;
            })
            .catch(err => console.log('An error occurred : ' + err));
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="nav">
                        <Search fetchData={this.fetchData.bind(this)} />
                    </div>
                    <div>
                        <Card isLoading={this.state.isLoading} pokemon={this.state.pokemon} />
                    </div>
                    <div className="card-container">
                        <Container class="highlight" title="Highlight" />
                        <Container class="last-visited" title="Last visited" />
                        <Container class="favorite" title="Favorites" />
                    </div>
                </div>
            </main>
        );
    }
}

export default Homepage;