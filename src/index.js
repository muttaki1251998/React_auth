import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import { firebaseApp } from './firebase';
import createHistory from 'history/createBrowserHistory';

 
import Home from './components/Home';
import Register from './components/Register'
import Login from './components/Login';
import Profile from './components/Profile';

const customHistory = createHistory();

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log("User has signed in", user);
        customHistory.push('/profile');        
    }else{
        console.log("Invalid user");
        customHistory.replace('/login');
    }
});

ReactDOM.render(
    <Router history = {customHistory} forceRefresh={false}>
        <div>
            <Route path = "/" component = {Home}></Route>
            <Route path = "/register" component = {Register}></Route>
            <Route path = "/login" component = {Login}></Route>
            <Route path = "/profile" component = {Profile}></Route>
        </div>
    </Router>,
    document.getElementById('root')
);