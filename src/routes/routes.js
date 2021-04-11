import { BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Route from './router';
import login from '../pages/login/login';
import register from '../pages/register/register';
import profileUpdate from '../pages/profile';
import Main from '../pages/main';
import characterDetails from '../pages/charactersDetails/index';
import favoritesCharacters from '../pages/charactersFavorite';
import comics from '../pages/comics';
import comicDetails from '../pages/comicsDetails/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/register" component={register} />
                <Route path="/main" exact component={Main} isPrivate />
                <Route
                    path="/details/:id"
                    exact
                    component={characterDetails}
                    isPrivate
                />
                <Route
                    path="/main/favorites"
                    component={favoritesCharacters}
                    isPrivate
                />
                <Route path="/profile" component={profileUpdate} isPrivate />
                <Route path="/comics" exact component={comics} isPrivate />
                <Route
                    path="/comic/details/:id"
                    component={comicDetails}
                    isPrivate
                />
            </Switch>
        </BrowserRouter>
    );
}
