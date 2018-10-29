import React, { Component } from 'react';
import MovieData from '../data/movie.json';
import '../App.css';

class ShowCard extends Component {
  render() {
    return (
      <div className = "card_container" >
        {MovieData.movie.map(function(Movies) {
          return (
          <div className = "wrapper-card" >
            <img src= {Movies.Poster} alt = "" ></img>
            <h3> {Movies.Title} < /h3>
            <p> {Movies.Year} < /p>
            <p > {Movies.plot} < /p>
          </div>
          );
        })
        }
    </div>
    );
  }
}
export default ShowCard;
