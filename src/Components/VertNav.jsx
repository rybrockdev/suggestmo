/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../Styles/verticalnav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { Link } from 'react-router-dom';

class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="VertNav">
        <Link to="/">
          <h1 className="navtitle">SuggestMo
            <FontAwesomeIcon icon={faVideo} className="fa-1x" />
          </h1>
        </Link>
        {
          this.props.isLoggedIn
            ? (
              <div className="buttons">
                <button className="bordertopbutton">Profile</button>
                <Link to="/MyMovies">
                  <button>My Movies</button>
                </Link>
                <button>Saved Films</button>
              </div>
            ) : (
              <div className="login">
                <label>
                  {'Username:'}
                  <input type="text" />
                </label>
                <label>
                  {'Password:'}
                  <input type="text" />
                </label>
                <p>Not signed up for account?</p>
                <Link to="/Signup" className="item"><button className="button">Sign Up</button></Link>
                <Link to="/Login" className="item"><button className="button">Login</button></Link>
              </div>
            )
        }
        <footer>
          <p>Created With Magic By</p>
          <p>Ryan Brockley & Luke Brannagan</p>
        </footer>
      </div>
    );
  }
}

export default VerticalNav;
