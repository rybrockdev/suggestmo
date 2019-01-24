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
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  }

  // handleFieldChange = (event) => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       [event.target.name]: event.target.value,
  //     },
  //   });
  // };

  handleSignup = () => {
    Axios.post('http://localhost:3000/users', this.state.fields)
      .then((response) => {
        this.setState({
          response: response.fields.data,
        });
      });
  };

  render() {
    return (
      <div className="signup-div">
        <form>
          <h1>Sign Up!<FontAwesomeIcon icon={faVideo} className="fa-1x" />
          </h1>
          <div className="firstName-div">
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleFieldChange} required />
          </div>
          <div className="lastName-div">
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleFieldChange} required />
          </div>
          <div className="email-div">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" value={this.state.email} onChange={this.handleFieldChange} required />
          </div>
          <div className="password-div">
            <label htmlFor="password">Password:</label>
            <input name="password" type="password" value={this.state.password} onChange={this.handleFieldChange} required />
          </div>
          <button type="submit" onSubmit={this.handleSignup}>Submit</button>


        </form>
      </div>
    );
  }
}

export default SignUp;
