import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import repository from './pages/repository';
import Main from './pages/main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/repository" component={repository} />
            </Switch>
        </BrowserRouter>
    );
}
