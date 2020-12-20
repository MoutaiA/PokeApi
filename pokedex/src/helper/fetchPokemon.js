async function fetchPokemon(req) {
    let pokemonFetched;
    if (req !== 0) {
        pokemonFetched = await fetch('https://pokeapi.co/api/v2/pokemon/' + req)
            .then(res => res.json())
            .catch(err => console.log('An error occurred, please checkout : ' + err))
    }

    return pokemonFetched
}

export default fetchPokemon;