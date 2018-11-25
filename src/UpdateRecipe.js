import React, { Component } from 'react';
import axios from 'axios';
import{port} from './Constants.jsx';
import renderRecipes from './App.js'
import RecipeTable from './RecipeTable.js'

class UpdateRecipe extends Component {
  constructor(props){
    super(props);
    this.state = ({
           data:[]
    });
}

  UpdateRecipe = (event) => {
    event.preventDefault();

        var data = {
        recipeName:document.getElementById('newRecipeName').value,
        recipeType:document.getElementById('newRecipeType').value,
        servingSize:document.getElementById('newServingSize').value,
        dietryInformation:document.getElementById('newDietryInformation').value
      };
      console.log(data);
      axios.put("http://localhost:" + port + "/new-account/rest/Recipes/updateRecipe/" + document.getElementById('recipeID').value, data).then((response) => {
        console.log(response.data);
        window.location.reload();
 
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