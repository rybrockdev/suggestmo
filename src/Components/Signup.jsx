/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/signup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import Axios from 'axios';
import TokenManager from '../Utils/token.manager';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSignp = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:3000/users', this.state.fields)

      .then(() => {
        Axios.post('http://localhost:3000/login', this.state.fields)
          .then((response) => {
            TokenManager.setToken(response.data.token);
            // this.props.onLogin();
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    return (
      <div className="signup-div">
        <form onSubmit={this.handleSignup}>
          <h1>{' Sign Up! '}<FontAwesomeIcon icon={faVideo} className="fa-1x" />
          </h1>

          <label htmlFor="firstName">{'First Name: '}
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleFieldChange}
              required
            />
            <br />
          </label>

          <label htmlFor="lastName">{'Last Name: '}
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleFieldChange}
              required
            />
            <br />
          </label>

          <label className="emaillabel" htmlFor="email">{'Email: '}
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleFieldChange}
              required
            />
            <br />
          </label>

          <label htmlFor="password">{'Password: '}
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleFieldChange}
              required
            />
            <br />
          </label>
          <button type="submit" onClick={this.handleSignup}>Submit</button>


        </form>
      </div>
    );
  }
}

export default SignUp;
