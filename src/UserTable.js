import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import AddUser from './AddUser.js'
import UpdateUser from './UpdateUser.js'

class UserTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add User",
            updateType: "Update User",
            port: 8180,
            data:[],
        });
    }


    createDeleteButton = (cell, rows) => {
        return <button id={rows.userID} className="btn btn-danger" onClick={() => this.deleteUser(rows.userID)}>Delete</button>;
    }

    deleteUser = (event) => {
      console.log(event);
      var url = "http://localhost:" + this.state.port + "/new-account/rest/Users/deleteUser/" + event;
      console.log(url)
      axios.delete(url).then((response) => {window.location.reload()});
    }

    createUpdateButton = (cell, rows) => {
        return <button id={rows.updateButton} className="btn btn-warning" onClick={() => this.updateFunction(rows)}>Update</button>;
    }

createFunction = () => {
  ReactDOM.render(<AddUser/>, document.getElementById('createDiv'));
}
updateFunction = (event) => {
  ReactDOM.render(<UpdateUser info={event}/>, document.getElementById('createDiv'));
}


  render() {
    return (
      <div className="UserTable" >

          <BootstrapTable id="tableList" data={this.state.tableArray} className="table table-striped" search scrollable >
            <TableHeaderColumn dataField='userID' isKey dataSort dataAlign='center'>user ID</TableHeaderColumn>
            <TableHeaderColumn dataField='userName' dataAlign='center'>Username</TableHeaderColumn>
            <TableHeaderColumn dataField='dietryRequirements' dataSort dataAlign='center'>Username</TableHeaderColumn>
            <TableHeaderColumn dataField='emailAddress' dataFormat={this.showDescription} dataAlign='center'>Email Address</TableHeaderColumn>
            <TableHeaderColumn dataField='age' dataFormat={this.showDescription} dataAlign='center'>Age</TableHeaderColumn>
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
export default UserTable;