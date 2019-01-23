import React from 'react';
import '../Styles/top10list.scss';
import Axios from 'axios';

class Top10List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latestMovies: [],
      images: [],
    };
  }

  componentWillMount = () => {
    Axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '0bea2a81b057198d0f958fd454fdd997',
        page: 1,
        region: 'GB',
      },
    })
      .then((response) => {
        this.setState({
          latestMovies: response.data.results,
        });
        this.getTen();
        this.getImages();
      });
  };

  getTen = () => {
    const top10 = [...this.state.latestMovies];
    console.log(top10);
    const splice = top10.splice(10, 19);
    this.setState({ latestMovies: top10 });
  };

  getImages = () => {
    this.state.latestMovies.map((card) => {
      return Axios.get(`https://api.themoviedb.org/3/movie/${card.id}/images`, {
        params: {
          api_key: '0bea2a81b057198d0f958fd454fdd997',
        },
      })
        .then((response) => {
          const array = [...this.state.images];
          array.push(`https://image.tmdb.org/t/p/w200/${response.data.posters[0].file_path}`);
          this.setState({ images: array });
        });
    });
  };

  render() {
    return (
      <div className="Top10List">
        {this.state.latestMovies.map((card, index) => {
          return (
            <div className="topTenCards" key={card.title}>
              <h1>{card.title}</h1>
              <img className="topTenImage" src={this.state.images[index]} />
              <p>Score: {card.vote_average}</p>
              <p>Released: {card.release_date}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Top10List;
