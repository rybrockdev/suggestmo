import React from 'react';
import '../Styles/login.scss';
import axios from 'axios';
import TokenManager from '../Utils/token.manager';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',


    };
  }


  handleFieldChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };


  handleonClick = () => {
    console.log('Hello');
    event.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response);
        console.log(this.props);
        TokenManager.setToken(response.data.token);
        this.props.history.push('/Homepage');
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    return (
      <div className="main-div">
        <form>
          <h1>Login</h1>
          <div className="email-div">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={this.handleFieldChange} value={this.state.email} />
          </div>
          <div className="password-div">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={this.handleFieldChange} value={this.state.password} />
          </div>
          <button type="submit" onClick={this.handleonClick}>Login</button>
          <div>
            <h4>Not signed up yet?
              <Link to="/Signup">Sign Up Here</Link>
            </h4>
          </div>

        </form>
      </div>
    );
  }
}

export default Login;
