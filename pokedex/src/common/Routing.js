import React, { useState } from 'react';
import Homepage from '../home/Homepage';
import NotFound from './NotFound';
import Card from '../card/Card';
import About from '../about/About';
import {
    Route,
    Switch,
    useLocation
} from "react-router-dom";

function Routing() {

    const query = new URLSearchParams(useLocation().search);
    const param = query.get('pokemon') ? query.get('pokemon') : query.get('id')
    const [arrPokemon, addPokemon] = useState([])

    let callback = (pokemon) => {
        addPokemon(arrPokemon.concat(pokemon))
    }

    return (
        <Switch>
            <Route exact path="/">
                <Homepage savedPokemon={arrPokemon} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/card">
                <Card callback={callback} param={param} />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routing;