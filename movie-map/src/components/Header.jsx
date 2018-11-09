import React, { Component } from 'react';
import MovieData from '../data/movie.json';
import '../App.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search : ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    let filteredMovie = MovieData.movie.filter(
      (Movies) => {
        // return Movies.Title.toLowerCase().indexOf(this.state.search) !== -1;
        return Object.keys(Movies).some(key => Movies[key].toString().search(this.state.search) !== -1);
      }
    );

    return (
      <div>
      <input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)}/>
      <div className = "movie-container">
        {filteredMovie.map(function(Movies) {
          return (
          <div className = "wrapper-card" >
            <img src= {Movies.Poster} alt = "" ></img>
            <h3> {Movies.Title} </h3>
            <p> {Movies.Year} </p>
            <p> {Movies.Plot} </p>
          </div>
          );
        })
        }
      </div>
      </div>
    );
  }
}
export default Header;
