import React from 'react';
import '../Styles/homepage.scss';
import Axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';


import Top10List from './Top10List';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
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
        const movieId = response.data.results[0].id;
        return Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, {
          params: {
            api_key: '0bea2a81b057198d0f958fd454fdd997',
            page: 1,
          },
        });
      })
      .then((response) => {
        this.setState({
          movieData: response.data.results,
          query: '',
        });
      });
  };

  // random title idea for
  getRandomTitle = () => {
    const randomIndex = Math.floor(Math.random() * this.state.movieData.length);
    return (
      <div className="randomCard">
        <div className="crossIcon">
          <FontAwesomeIcon className="fa-2x" icon={faTimes} onClick={this.handleDelete} />
        </div>
        <p>We Recommend:</p>
        <h1>{this.state.movieData[randomIndex].title}</h1>
        <img src={`https://image.tmdb.org/t/p/w200/${this.state.movieData[randomIndex].poster_path}`} />
        <p>{this.state.movieData[randomIndex].overview}</p>
        <p>Rating: {this.state.movieData[randomIndex].vote_average}</p>
        <p>Released: {this.state.movieData[randomIndex].release_date}</p>
      </div>
    );
  };

  handleDelete = () => {
    this.setState({ movieData: [] });
  };

  render() {
    return (
      <div className="Homepage">
        <h1 className="title">{'SuggestMo '}
          <FontAwesomeIcon icon={faVideo} className="fa-1x" />
        </h1>
        {
          this.state.movieData.length < 1 ? (
            <React.Fragment>
              <h2>
                Type a name of a film to find a similar title.
              </h2>
              <input placeholder="Search a Film..." value={this.state.query} onChange={this.handleChange} type="text" className="textInput" />
              <button onClick={this.searchFunction}>Search</button>
            </React.Fragment>
          ) : null
        }

        {
          this.state.movieData.length === 0
            ? (
              <React.Fragment>
                <h1>Scroll over a card for more info.</h1>
                <Top10List />
              </React.Fragment>
            )
            : null
        }
        {
          this.state.movieData.length > 0
            ? this.getRandomTitle()
            : null
        }
      </div>
    );
  }
}

export default HomePage;
