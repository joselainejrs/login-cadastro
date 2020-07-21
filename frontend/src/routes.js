import React from  'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import login from './pages/Login';
import register from './pages/Register';
import logged from './pages/Logged';
import forgotpass from './pages/Forgotpass';
import newpass from './pages/Newpass';

export default function Router(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={login} />
            <Route path="/register"  component={register} />
            <Route path="/logged"  component={logged} />
            <Route path="/forgotpass"  component={forgotpass} />
            <Route path="/newpass"  component={newpass} />

        </Switch>
        </BrowserRouter>
    );
}