import React from 'react';
import Homepage from './Homepage';
import NotFound from './NotFound';
import Card from './Card';
import About from './About';
import {
    Route,
    Switch,
} from "react-router-dom";

function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/card" component={Card} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routing;