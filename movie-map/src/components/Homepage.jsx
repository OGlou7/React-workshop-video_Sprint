import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Homepage extends Component {
  render() {
    return (
    <div className = "App" >
      <header className = "App-header" >
      <NavLink to="/Movies" className = 'home-button'> more Movies < /NavLink> </header>
    </div>
    );
  }
}

export default Homepage;
