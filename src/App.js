import React, { Component } from 'react';
import './App.css';
import Authors from './Components/authors.js';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h2 className="text-center">STAR WARS MEMORY GAME</h2>
          <center><p>Click on an image to begin. The goal of the game is to only click on images that 
            you have not previously clicked on during that game. Don't click the same photo twice!</p></center>
        </div>
        <div className="container">
          {/* author images will render here */}
          <Authors />
        </div>
      </div>
    )
  }
}

