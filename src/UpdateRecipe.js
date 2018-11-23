import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class UpdateRecipe extends Component {
  constructor(props){
    super(props);
    this.state = ({
   
        port: 8180,
        data:[],
    });
}


  UpdateRecipe = (event) => {
        var data = {
        recipeName:document.getElementById('newRecipeName').value,
        recipeType:document.getElementById('newRecipeType').value,
        servingSize:document.getElementById('newDietryInformation').value,
        dietryInformation:document.getElementById('newServingSize').value
      };
      console.log(data);
      // event.preventDefault();
      axios.put("http://localhost:" + this.state.port + "/new-account/rest/Recipes/updateRecipe/" + document.getElementById('recipeID').value, data).then((response) => {
        console.log(response.data);
    //    window.location.reload();
      });
    }

render() {
return (

<div>
Enter recipe ID 
<br/>
<input id="recipeID" placeholder = "Recipe ID" />
<br/>
Enter the updated recipe name
<br/>
<input id = "newRecipeName"  placeholder = "Recipe Name" />
<br/>
Enter the updated recipe type
<br/>
<input id = "newRecipeType"  placeholder = "Recipe Type" />
<br/>
Enter the updated serving size
<br/>
<input id = "newServingSize"  placeholder = "Serving size" />
<br/>
Enter the updated dietry information
<br/>
<input id ="newDietryInformation"  placeholder = "Dietry information" />
<br/>
<button className="btn btn-success" onClick={this.UpdateRecipe}>Update recipe</button>
</div>
)}
}
export default UpdateRecipe;