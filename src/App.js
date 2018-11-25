import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RecipeTable from './RecipeTable.js';
import UserTable from './UserTable.js';
import ReviewTable from './ReviewTable.js';
import{port} from './Constants.jsx';



class App extends Component {

  constructor(){
    super();
    this.state = {
      buttonName:"Refresh Table",
    }
  }

  componentDidMount(){
    this.renderRecipes();
  }
  
  renderRecipes = () => {
    var url = "http://localhost:" + port + "/new-account/rest/Recipes/getAllRecipes";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<RecipeTable classData={response}/>, document.getElementById('tables'));
    });
  }


  renderUsers = () => {
        var url = "http://localhost:" + port + "/new-account/rest/Users/getAllUsers";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<UserTable classData={response} />, document.getElementById('tables'));
    });
  }


  renderReviews = () => {
    var url = "http://localhost:" + port + "/new-account/rest/Reviews/getAllReviews";
    var response;
    
    axios.get(url).then((res) => {
      response = res.data;
      ReactDOM.render(<ReviewTable classData={response}/>, document.getElementById('tables'));
    });
  }




  render() {
    return (

      <div>
      <h1> Recipe app</h1>

  <div className="App">
          <button className="btn btn-primary" onClick={() => this.renderRecipes()}>Recipes</button>
          <button className="btn btn-primary" onClick={() => this.renderUsers()}>Users</button>
          <button className="btn btn-primary" onClick={() => this.renderReviews()}>Reviews</button>
          <br></br>
          <div id="tables">
          <br></br>
            <UserTable/>

          </div>
      </div>
    </div>
    );
  }
}

export default App;