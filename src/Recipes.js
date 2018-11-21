import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios'

class RecipeTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            RecipieInformation: this.props.array}
      }
    // add in port number variable instead of using 8180

      getAllRecipes = () => {
        axios.get('http://localhost:' + '8180/new-account/rest/Recipes/getAllRecipes').then(response =>{
          this.setState({
            RecipieInformation: response.data
        });
      });
      }


      render() {
        return (
             <div>
  <BootstrapTable className="RecipeTable">           
    {/* data={this.state.getAllRecipes} */}
      <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='recipeID' isKey>Recipe ID</TableHeaderColumn>
      <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='recipeName'>Recipe Name</TableHeaderColumn>
      <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='servingSize'>Serving Size</TableHeaderColumn>
      <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='recipeType'>Recipe type</TableHeaderColumn>
      <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='dietryInformation'>Dietry information</TableHeaderColumn>
  </BootstrapTable>     

  <button onclick="<AddRecipe/>">  Add Recipe </button> <br/>
  <button onclick="<UpdateRecipe/>">  Update Recipe </button> <br/>
  <button onclick="<DeleteRecipe/>">  Delete Recipe </button> <br/>
  <button onclick="<Reviews/>">  Reviews </button> <br/>
  <button onclick="<Users/>">  Users </button> <br/>


</div>

   );
    }
}
export default RecipeTable;
