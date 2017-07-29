import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../containers/Login';
import SignUp from '../components/SignUpForm';
import Items from '../containers/Items';
import Profile from '../containers/Profile';
import Share from '../containers/Share';
import NotFound from '../containers/NotFound';
import PrivateRoute from '../components/PrivateRoute';

const Routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Items} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute path="/share" component={Share} />
        <PrivateRoute component={NotFound} />
    </Switch>
);

export default Routes;
