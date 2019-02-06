/* eslint-disable react/no-unused-state */
import React from 'react';
import { Route } from 'react-router-dom';
import './Styles/app.scss';
import HomePage from './Components/Homepage';
import VertNav from './Components/VertNav';
import SignUp from './Components/Signup';
import MyMovies from './Components/myMovies';

import Login from '../src/Components/login';
import TokenManager from '../src/Utils/token.manager';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }


  isLoggedIn = () => {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  };

  render() {
    return (
      <React.Fragment>

        <div className="sidebar">
          <VertNav />
        </div>
        <div className="main">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/MyMovies" component={MyMovies} />
          <Route exact path="/Login" component={Login} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
