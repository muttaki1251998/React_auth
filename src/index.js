import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import Register from './components/Register'
import Login from './components/Login';
import Profile from './components/Login';

const customHistory = createHistory();



ReactDOM.render(
    <Router history = {customHistory}>
        <div>
            <Route path = "/" component = {Home}></Route>
            <Route path = "/register" component = {Register}></Route>
            <Route path = "/login" component = {Login}></Route>
            <Route path = "/profile" component = {Profile}></Route>
        </div>
    </Router>,
    document.getElementById('root')
);