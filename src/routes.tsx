import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Portfolio from './pages/portfolio';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/jobs" exact component={Portfolio} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;