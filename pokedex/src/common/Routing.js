import React, { useState, useEffect } from 'react';
import Homepage from '../home/Homepage';
import NotFound from './NotFound';
import Card from '../card/Card';
import About from '../about/About';
import {
    Route,
    Switch,
    useLocation
} from "react-router-dom";
import StoredData from '../helper/StoredPokemon';

function Routing() {

    const query = new URLSearchParams(useLocation().search);
    const param = query.get('pokemon') ? query.get('pokemon') : query.get('id')
    const [arrPokemon, addPokemon] = useState([])
    const [visitedPage, setVisitedPage] = useState([]);

    let callback = (pokemon) => {
        addPokemon(arrPokemon.concat(pokemon))
    }

    let updateVisitedPage = (pokemon) => {
        let newStoredData = new StoredData();
        for(let i = 0; i < visitedPage.length; i++) {
            newStoredData.addPokemon(visitedPage[i])
        }
        newStoredData.addPokemon(pokemon)
        setVisitedPage(newStoredData.storedData)
        console.log(newStoredData.storedData);
    }

console.log(visitedPage);
    return (
        <Switch>
            <Route exact path="/">
                <Homepage visitedPokemon={visitedPage} savedPokemon={arrPokemon} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/card">
                <Card callback={callback} param={param} visitedPage={updateVisitedPage} />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routing;