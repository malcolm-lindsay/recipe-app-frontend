import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import ReactDOM from 'react-dom';
import AddReview from './AddReview.js'
import UpdateReview from './UpdateReview.js'
import{port, ip} from './Constants.jsx';
import './App.css'

class ReviewTable extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add Review",
            updateType: "Update Review",
            data:[],
        });
    }

    createDeleteButton = (cell, rows) => {
        return <button id={rows.reviewID} className="buttons" onClick={() => this.deleteReview(rows.reviewID)}>Delete</button>;
    }

    deleteReview = (event) => {
      console.log(event);
      var url = ip + port + "/new-account/rest/Reviews/deleteReview/" + event;
      console.log(url)
      axios.delete(url).then((response) => {window.location.reload()});
    }

    createUpdateButton = (cell, rows) => {
        return <button id={rows.updateButton} className="buttons" onClick={() => this.updateFunction(rows)}>Update</button>;
    }

createFunction = () => {
  ReactDOM.render(<AddReview/>, document.getElementById('createDiv'));
}
updateFunction = (event) => {
  ReactDOM.render(<UpdateReview info={event}/>, document.getElementById('createDiv'));
}

  render() {
    return (
      <div className="ReviewTable" >

          <BootstrapTable id="tableList" data={this.state.tableArray} className="table table-striped" search scrollable >
            <TableHeaderColumn width= '100' dataField='reviewID' isKey dataSort dataAlign='center'>Review ID</TableHeaderColumn>
            <TableHeaderColumn width= '150' dataField='nameOfRecipe' dataAlign='center'>Name of Recipe</TableHeaderColumn>
            <TableHeaderColumn width= '150' dataField='yearOfReview' dataSort dataAlign='center'>Year of Review</TableHeaderColumn>
            <TableHeaderColumn width= '200' dataField='rating'  dataAlign='center'>Rating out of 10</TableHeaderColumn>
            <TableHeaderColumn width= '100' dataField='updateButton' dataFormat={this.createUpdateButton} dataAlign='center'></TableHeaderColumn>
            <TableHeaderColumn width= '100' dataField='button' dataFormat={this.createDeleteButton} dataAlign='center'></TableHeaderColumn>  
          </BootstrapTable>    

          <div id="createDiv">
            <button id="CreateButton" className="buttons" onClick={() => this.createFunction()}>{this.state.type}</button><br/>
          </div>
      </div>
    );
  }
}
export default ReviewTable;
