async function fetchPokemon(req) {
    const pokemonFetched = await fetch('https://pokeapi.co/api/v2/pokemon/' + req)
        .then(res => res.json())
        .catch(err => console.log('An error appeared : ' + err))

    return pokemonFetched
}

export default fetchPokemon;