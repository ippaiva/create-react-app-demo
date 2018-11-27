import React, { Component } from 'react';
import ImprovedCard from '../ImprovedCard.js';

class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
        { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
        { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
      ],
      showOscarAwarded: false
    }
  }

  toggleMovies = () => {
    this.setState({
      showOscarAwarded: !this.state.showOscarAwarded
    })
  }

  deleteMovieHandler(movieIndex) {
    const moviesCopy = [...this.state.movies];
    moviesCopy.splice(movieIndex, 1);
    this.setState({
        movies: moviesCopy
    })
  }

  render() {
    const { showOscarAwarded } = this.state;

    const filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);

    return (
      <div>
        {
          filteredMovies.map((oneMovie, index) => {
            return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
          })
        }            
        <button onClick={() => this.toggleMovies() }>
            {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
        </button>
      </div>
    );
  }
}

export default DynamicMoviesList;