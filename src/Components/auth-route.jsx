import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ isLoggedIn, ...props }) => (
  isLoggedIn
    ? <Route to="/Signup" />
    : <Redirect to="/Login" />
);

export default AuthRoute;
