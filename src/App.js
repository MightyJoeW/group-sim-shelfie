import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing'

//COMPONENTS
import Nav from './components/Nav/Nav'
import ShelfTile from './components/Landing/ShelfTile/ShelfTile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        
        <Landing/>
      </div>
    );
  }
}

export default App;
