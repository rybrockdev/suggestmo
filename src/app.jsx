import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Styles/app.scss';
import VertNav from './Components/VertNav';
import SignUp from './Components/Signup';
import MyMovies from './Components/myMovies';
import Homepage from '../src/Components/Homepage';
import AuthRoute from './Components/auth-route';

import Login from '../src/Components/login';
import TokenManager from '../src/Utils/token.manager';


class App extends React.Component {
  constructor(props) {
    super(props);
    const user = TokenManager.getTokenPayload();
    this.state = {
      user,
    };
  }

  handleLogin = (user) => {
    this.setState({ user });
  };

  isLoggedIn = () => {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  };

  render() {
    return (
      <React.Fragment>

        <div className="sidebar">
          <VertNav isLoggedIn={this.isLoggedIn()} />
        </div>
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              component={Homepage}
            />
            <Route
              exact
              path="/MyMovies"
              component={MyMovies}
            />
            <Route exact path="/Signup" component={SignUp} />
            <Route
              exact
              path="/Login"
              render={routeProps => (
                <Login {...routeProps} onLogin={this.handleLogin} />
              )}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
