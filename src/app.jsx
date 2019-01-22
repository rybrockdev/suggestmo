import React from 'react';
import { Route } from 'react-router-dom';
import './Styles/app.scss';


import HomePage from './Components/Homepage';
import VertNav from './Components/VertNav';

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
        <VertNav />
        <Route>
          <HomePage />
        </Route>
      </React.Fragment>
    )
  }
}

export default App;