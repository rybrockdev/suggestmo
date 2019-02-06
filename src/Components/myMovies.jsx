import React from 'react';
import Axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

class MyMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: '',
      myMovies: [],
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

  addMovie = (index) => () => {
    this.setState((prevState) => {
       const f = {
        myMovies: prevState.myMovies.concat(this.state.movies[index]),
        movies: [],
      };
      return f;
    });
  }

  deleteMovie = (index) => () => {
   console.log("Deleted")
   const array = [...this.state.myMovies]
   this.setState((prevState) => {
    const f = {
     myMovies: prevState.myMovies.splice(index, 1),
   };
   return f;
 });
   console.log("array", array);
    
  };


  render() {
    return (
      <div className="mymovies">
        <h1>My Movies</h1>
        <input type="text" onChange={this.handleChange} placeholder="Search a title" />
        <button onClick={this.getFilm}>Submit</button>
        {
            this.state.movies.length > 0 ? this.state.movies.map((movie, index) => {
              return (
                <div className="mymoviecard" key={movie.id}>
                  <FontAwesomeIcon onClick={this.addMovie(index)}icon={faPlus} />
                  <div className="image" style={{ backgroundImage: `url( https://image.tmdb.org/t/p/w400/${movie.poster_path})` }} />
                </div>
              );
            }) : null
          }
        <div className="collection" />
        <h1>Your collection</h1>
        {
          this.state.myMovies.map((movie, index) => {
            return (
              <div key={movie.id}>
              <FontAwesomeIcon onClick={this.deleteMovie(index)} icon={faTimes} />
                <h1>{movie.title}</h1>
              </div>
            );
          })
        }

      </div>
    );
  }
}

export default MyMovies;
