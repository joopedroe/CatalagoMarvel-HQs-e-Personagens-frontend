import { BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Route from './router';
import repository from '../pages/repository';
// import Main from '../pages/main';
import login from '../pages/login/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/main" component={repository} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}
