import React from 'react';
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

    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/card">
                <Card param={param} />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routing;