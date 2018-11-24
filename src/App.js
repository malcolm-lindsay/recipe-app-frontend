import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RecipeTable from './RecipeTable.js';
import UserTable from './UserTable.js';
import ReviewTable from './ReviewTable.js';


class App extends Component {

  constructor(){
    super();
    this.state = {
      buttonName:"Refresh Table",
      port: 8180
    }
  }

  componentDidMount(){
    this.renderReviews();
  }
  
  renderRecipes = () => {
    var url = "http://localhost:" + this.state.port + "/new-account/rest/Recipes/getAllRecipes";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<RecipeTable classData={response}/>, document.getElementById('tables'));
    });
  }


  renderUsers = () => {
        var url = "http://localhost:" + this.state.port + "/new-account/rest/Users/getAllUsers";
    var response;
    axios.get(url).then((res) =>{
      response = res.data;
      ReactDOM.render(<UserTable classData={response} />, document.getElementById('tables'));
    });
  }


  renderReviews = () => {
    var url = "http://localhost:" + this.state.port + "/new-account/rest/Reviews/getAllReviews";
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
          <button className="btn btn-primary" onClick={() => this.renderRecipes()}><i className="fas fa-film" style={{width:'60px', height:'35px'}}></i></button>
          <button className="btn btn-primary" onClick={() => this.renderUsers()}><i className="fas fa-video" style={{width:'60px', height:'35px'}}></i></button>
          <button className="btn btn-primary" onClick={() => this.renderReviews()}><i className="fas fa-user" style={{width:'60px', height:'35px'}}></i></button>
          <div id="tables">
            {/* <UserTable/>
            <RecipeTable/> */}
            <ReviewTable/>

          </div>
      </div>
    </div>
    );
  }
}

export default App;