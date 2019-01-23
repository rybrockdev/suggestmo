import React from 'react';
import '../Styles/homepage.scss';
import Axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';


import Top10List from './Top10List';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      movieId: [],
      movieData: [],
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  searchFunction = () => {
    Axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '0bea2a81b057198d0f958fd454fdd997',
        query: this.state.query,
      },
    })
      .then((response) => {
        this.setState({
          movieId: response.data.results[0].id,
        });
      });

    Axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieId}/similar`, {
      params: {
        api_key: '0bea2a81b057198d0f958fd454fdd997',
        page: 1,
      },
    })
      .then((response) => {
        this.setState({
          movieData: response.data.results,
        });
        console.log(this.state.movieData);
      });
  };

 // random title idea for
  // getRandomTitle = () => {
  //   const randomIndex = Math.random() * this.state.movieData.length;
  //   console.log(randomIndex)
  //   return (
  //     <div>
  //       <p>We Have Chosen:</p>
  //       <h1>{this.state.movieData[randomIndex].title}</h1>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div className="Homepage">
        <h1 className="title">{'SuggestMo '}
          <FontAwesomeIcon icon={faVideo} className="fa-1x" />
        </h1>
        <h2>
            Type a name of a film to find a similar title.
        </h2>
        <input placeholder="Search a Film/Tv Show..." onChange={this.handleChange} type="text" className="textInput" />
        <button onClick={this.searchFunction}>Search</button>
        <div className="checkBoxes">
          <label>
            <input type="checkbox" />
          Movies
          </label>

          <label>
            <input type="checkbox" />
          Tv Shows
          </label>
        </div>
        <Top10List />
      </div>
    );
  }
}

export default HomePage;
