import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios'

class RecipeTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            UserInformation: this.props.array}
      }

getAllUsers = () => {
    axios.get('http://localhost:' + '8180/new-account/rest/Users/getAllUsers').then(response =>{
      this.setState({
        UserInformation: response.data
    });
  });
  }

  
  render() {
    return (
         <div>
<BootstrapTable className="UserTable">           
{/* data={this.state.getAllRecipes} */}
  <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='userID' isKey>userID</TableHeaderColumn>
  <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='Name'>Name</TableHeaderColumn>
  <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='DietryRequirements'>DietryRequirements</TableHeaderColumn>
  <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='EmailAddress'>EmailAddress</TableHeaderColumn>
  <TableHeaderColumn style= {{color: "black"}} tdStyle={{ whiteSpace: 'unset' }}  Column width={'10%'} dataField='Country'>Country</TableHeaderColumn>
</BootstrapTable>     

<button onclick="<AddUser/>">  Add User </button> <br/>
<button onclick="<UpdateUser/>">  Update User </button> <br/>
<button onclick="<DeleteUser/>">  Delete User </button> <br/>
<button onclick="<Recipes/>">  Recipes </button> <br/>
<button onclick="<Reviews/>">  Reviews </button> <br/>


</div>

);
}
}
export default RecipeTable;
