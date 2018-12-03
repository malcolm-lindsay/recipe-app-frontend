import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import AddRecipe from './AddRecipe.js'
import UpdateRecipe from './UpdateRecipe'
import{port, ip} from './Constants.jsx';
import './App.css'

class RecipeTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Recipe",
            updateType: "Update Recipe",
            data:[]
        });
    }

    createDeleteButton = (cell, rows) => {
        return <button id={rows.recipeID} className="buttons" onClick={() => this.deleteRecipe(rows.recipeID)}>Delete</button>;
    }

    deleteRecipe = (event) => {
      console.log(event);
      var url = ip + port + "/new-account/rest/Recipes/deleteRecipe/" + event;
      console.log(url)
      axios.delete(url).then((response) => {window.location.reload()});
    }

    createUpdateButton = (cell, rows) => {
        return <button id={rows.updateButton} className="buttons" onClick={() => this.updateFunction(rows)}>Update</button>;
    }

createFunction = () => {
  ReactDOM.render(<AddRecipe/>, document.getElementById('createDiv'));
}
updateFunction = (event) => {
  ReactDOM.render(<UpdateRecipe info={event}/>, document.getElementById('createDiv'));
}

  render() {
    return (
      <div className="RecipeTable" >

          <BootstrapTable id="tableList" data={this.state.tableArray} className="table table-striped" search scrollable >
            <TableHeaderColumn width= '100' dataField='recipeID' isKey dataSort dataAlign='center'>Recipe ID</TableHeaderColumn>
            <TableHeaderColumn width= '100' dataField='recipeName' dataSort dataAlign='center'>Recipe Name</TableHeaderColumn>
            <TableHeaderColumn width= '100' dataField='servingSize' dataSort dataAlign='center'>Serving Size</TableHeaderColumn>
            <TableHeaderColumn width= '100' dataField='recipeType' dataSort dataAlign='center'>Recipe Type</TableHeaderColumn>
            <TableHeaderColumn width= '150' dataField='dietryInformation' dataAlign='centre'>Dietry Information</TableHeaderColumn>
            <TableHeaderColumn width= '100' dataField='updateButton' dataFormat={this.createUpdateButton} dataAlign='center'></TableHeaderColumn>
             <TableHeaderColumn width= '100'  dataField='button' dataFormat={this.createDeleteButton} dataAlign='center'></TableHeaderColumn>  
          </BootstrapTable>    

          <div id="createDiv">
            <button id="CreateButton" className="buttons" onClick={() => this.createFunction()}>{this.state.type}</button>  </div>
      </div>
    );
  }
}
export default RecipeTable;
