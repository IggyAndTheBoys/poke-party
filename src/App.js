import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
TODO: API calls (Pokemans)

TODO: Cards with char information
    Can edit cards
    can favorite and unfavorite cards
    save

TODO: Drop down menu with types

TODO: Drag and drop order of cards

TODO: Search bar/ filter

TODO: Pagination (10)

TODO: React routing to page with mini cards (your favorites)
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
