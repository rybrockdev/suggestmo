/* eslint-disable react/no-unused-state */
import React from 'react';
import { Route } from 'react-router-dom';
import './Styles/app.scss';
import HomePage from './Components/Homepage';
import VertNav from './Components/VertNav';
import SignUp from './Components/Signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <VertNav />
         <div className="main">
         <div className="main">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Signup" component={SignUp} />
         </div>
      </React.Fragment>
    );
  }
}

export default App;
