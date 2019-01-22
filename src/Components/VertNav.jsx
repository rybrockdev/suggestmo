import React from 'react';
import '../Styles/verticalnav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faGithub } from '@fortawesome/free-solid-svg-icons/'

class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="VertNav">
        <h1 className="navtitle">SuggestMo
          <FontAwesomeIcon icon={faVideo} className="fa-1x" />
        </h1>

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
        </div>
        <div className="buttons">
          <button className="bordertopbutton">Profile</button>
          <button>My Movies</button>
          <button>Saved Films</button>
        </div>
        <footer>
          <p>Created With Magic By</p>
          <p>Ryan Brockerly & Luke Brannagan</p>
        </footer>
      </div>
    )
  }
}

export default VerticalNav;
