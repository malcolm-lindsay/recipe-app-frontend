import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class RecipeTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            RecipieInformation: this.props.array}
      }
      render() {
        return (
            <div>
  <BootstrapTable keyfield='account'>
      <TableHeaderColumn dataField='id' isKey>Recipe ID</TableHeaderColumn>
      <TableHeaderColumn>Recipe Name</TableHeaderColumn>
      <TableHeaderColumn>Serving Size</TableHeaderColumn>
      <TableHeaderColumn>Recipe type</TableHeaderColumn>
      <TableHeaderColumn>Dietry information</TableHeaderColumn>
  </BootstrapTable>     
</div>

   );
    }
}
export default RecipeTable;
