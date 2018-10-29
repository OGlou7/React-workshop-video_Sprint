import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import ShowCard from './components/ShowCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/Movies" component={ShowCard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
