import React from 'react';
import Axios from 'axios';

class MyMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: '',
      images: [],
      mymovies: [],
    };
  }

  getFilm = () => {
    Axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '0bea2a81b057198d0f958fd454fdd997',
        query: this.state.query,
      },
    })
      .then((response) => {
        this.setState({
          movies: response.data.results,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };


  render() {
    return (
      <div className="mymovies">
        <h1>My Movies</h1>
        <input type="text" onChange={this.handleChange} placeholder="Search a title" />
        <button onClick={this.getFilm}>Submit</button>
        <div className="collection">
          <h1>Your collection</h1>
          {
            this.state.movies.length > 0 ? this.state.movies.map((movie, index) => {
              return (
                <div key={movie.id}>
                  <h1>{movie.title}</h1>
                  <div className="image" style={{ backgroundImage: `url( https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }} />
                  <h1>{movie.release_date}</h1>
                  <h1>{movie.vote_average}</h1>
                </div>
              );
            }) : null
        }
        </div>
      </div>
    );
  }
}

export default MyMovies;
