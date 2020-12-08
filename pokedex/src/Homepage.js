import React, { useState } from 'react';
import './Homepage.css';
import Search from './Search';
import Card from './Card';
import Container from './Container';

function Homepage() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         pokemon: {
    //             name: '',
    //             id: 0,
    //             type: [],
    //             image: ''
    //         },
    //         isLoading: false
    //     }
    // }

    const [pokemon, setPokemon] = useState({
        name: '',
        id: 0,
        type: [],
        image: ''
    });

    const [isLoading, setLoading] = useState(false);

    let fetchData = (chosenPokemon) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + chosenPokemon)
            .then(res => res.json())
            .then(res => {
                setPokemon({
                    name: res.name,
                    id: res.id,
                    type: res.types.map(el => el.type.name),
                    image: res.sprites.front_default
                },
                )
                setLoading(true);
                return res;
            })
            .catch(err => console.log('An error occurred : ' + err));
    }

    return (
        <main>
            <div className="container">
                <div className="nav">
                    <Search fetchData={fetchData.bind(this)} />
                </div>
                <div>
                    <Card isLoading={isLoading} pokemon={pokemon} />
                </div>
                <div className="card-container">
                    <Container className="highlight" title="Highlight" />
                    <Container className="last-visited" title="Last visited" />
                    <Container className="favorite" title="Favorites" />
                </div>
            </div>
        </main>
    )
}

export default Homepage;