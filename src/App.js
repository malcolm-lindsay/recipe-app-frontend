import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import RecipeTable from './RecipeTable.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Recipe app</h1>
  <RecipeTable/>

  <button onclick="<Users/>">  Users </button>
  <button onclick="<Reviews/>">  Reviews </button>

        </header>
      </div>
    );
  }
}

export default App;