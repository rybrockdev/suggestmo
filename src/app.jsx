import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/Homepage';

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

        <Route>
          <HomePage />
        </Route>
      </React.Fragment>
    )
  }
}

export default App;