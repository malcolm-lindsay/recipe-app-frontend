import React, { Component } from 'react';
import axios from 'axios';
import{port} from './Constants.jsx';

class AddRecipe extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Recipe",
        });
    }


    async AddRecipe(){
        var url = "http://localhost:" + port + "/new-account/rest/Recipes/createRecipe";
        var data = {
            recipeName:document.getElementById('recipeName').value,
            servingSize:document.getElementById('servingSize').value,
            recipeType:document.getElementById('recipeType').value,
            dietryInformation:document.getElementById('dietryInformation').value
        };
        axios.post(url, data).then((res) => {window.location.reload()});
    }                                   


  render() {
    return (
      <div className="AddRecipe">
          <br/>
          <input id='recipeName' type='text' placeholder='Recipe Name' className="form-control"/><br/>
          <input id='servingSize' type='text' placeholder='Serving Size' className="form-control"/><br/>
          <input id='recipeType' type='text' placeholder='Recipe Type' className="form-control"/><br/>
          <input id='dietryInformation' type='text' placeholder='Dietry Information' className="form-control"/><br/>
          <button id="SubmitButton" className="btn btn-success" onClick={() => this.AddRecipe()}>{this.state.type}</button>
          <div id="createDiv"></div>
      </div>
    );
  }
}
export default AddRecipe;