import React, { Component } from 'react';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';

class RecipeTable extends Component {
    constructor(props){
        super(props);
      }

      render() {
        return (
<table>
    <th>recipe ID</th>
    <th>recipe name</th>
    <th>Serving size</th>
    <th>Recipe type</th>
    <th>Dietry information</th>
</table>

   );
}
};

export default RecipeTable;
