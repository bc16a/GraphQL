import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/sign-in' component={SignIn} />
            </Switch>
        </BrowserRouter> 
    )
}