import { BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Route from './router';
import login from '../pages/login/login';
import register from '../pages/register/register';
import profileUpdate from '../pages/profile';
import Main from '../pages/main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/register" component={register} />
                <Route path="/main" component={Main} isPrivate />
                <Route path="/profile" component={profileUpdate} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}
