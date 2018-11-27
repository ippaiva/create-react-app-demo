import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import { listItems, MoviesList } from './components/ListDemo.js';
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <DynamicMoviesList />
      </div>
    );
  }
}

export default App;
