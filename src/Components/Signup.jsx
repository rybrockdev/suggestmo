/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Styles/signup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import Axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',

    };
  }

  handleFieldChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignup = () => {
    event.preventDefault();
    Axios.post('http://localhost:3000/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
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
