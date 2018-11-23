import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import AddRecipe from './AddRecipe.js'
import UpdateRecipe from './UpdateRecipe'

class RecipeTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Recipe",
            updateType: "Update Recipe",
            port: 8180,
            data:[],
        });
    }


    createDeleteButton = (cell, rows) => {
        return <button id={rows.recipeID} className="btn btn-danger" onClick={() => this.deleteRecipe(rows.recipeID)}>Delete</button>;
    }

    deleteRecipe = (event) => {
      console.log(event);
      var url = "http://localhost:" + this.state.port + "/new-account/rest/Recipes/deleteRecipe/" + event;
      console.log(url)
      axios.delete(url).then((response) => {window.location.reload()});
    }

    createUpdateButton = (cell, rows) => {
        return <button id={rows.updateButton} className="btn btn-warning" onClick={() => this.updateFunction(rows)}>Update</button>;
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
            <TableHeaderColumn dataField='recipeID' isKey dataSort dataAlign='center'>Recipe ID</TableHeaderColumn>
            <TableHeaderColumn dataField='recipeName' dataAlign='center'>Recipe Name</TableHeaderColumn>
            <TableHeaderColumn dataField='servingSize' dataSort dataAlign='center'>Serving Size</TableHeaderColumn>
            <TableHeaderColumn dataField='recipeType' dataFormat={this.showDescription} dataAlign='center'>Recipe Type</TableHeaderColumn>
            <TableHeaderColumn dataField='dietryInformation' dataFormat={this.showDescription} dataAlign='center'>Dietry Information</TableHeaderColumn>
            <TableHeaderColumn dataField='updateButton' dataFormat={this.createUpdateButton} dataAlign='center'></TableHeaderColumn>
            <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton} dataAlign='center'></TableHeaderColumn>  
          </BootstrapTable>    

          <div id="createDiv">
            <button id="CreateButton" className="btn btn-success" onClick={() => this.createFunction()}>{this.state.type}</button><br/>
          </div>
      </div>
    );
  }
}
export default RecipeTable;