import React from 'react';
import SignUp from '../src/Components/Signup';
import { Route } from 'react-router-dom';

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
          <Link to="/Signup" component={SignUp} ></Link>
        </Route>
      </React.Fragment>
    )
  }
}

export default App;