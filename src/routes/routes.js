import { BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Route from './router';
import repository from '../pages/repository';
// import Main from '../pages/main';
import login from '../pages/login/login';
import register from '../pages/register/register';
import profileUpdate from '../pages/profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/register" component={register} />
                <Route path="/main" component={repository} isPrivate />
                <Route path="/profile" component={profileUpdate} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}
