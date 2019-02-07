import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isLoggedIn, ...props }) => (
  isLoggedIn
    ? <Route {...props} />
    : <Redirect to="/Login" />
);

export default AuthRoute;
