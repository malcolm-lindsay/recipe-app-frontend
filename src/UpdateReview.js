import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class UpdateReview extends Component {
  constructor(props){
    super(props);
    this.state = ({
   
        port: 8180,
        data:[]
    });
}


  UpdateRecipe = (event) => {
        var data = {
        review:document.getElementById('newReview').value,
        yearOfReview:document.getElementById('newYearOfReview').value,
        rating:document.getElementById('newRating').value,
        // dietryInformation:document.getElementById('newDietryInformation').value
      };
      console.log(data);
      // event.preventDefault();
      axios.put("http://localhost:" + this.state.port + "/new-account/rest/Reviews/updateReview/" + document.getElementById('reviewID').value, data).then((response) => {
        console.log(response.data);
       window.location.reload();
      });
    }

render() {
return (

<div>
Enter review ID 
<br/>
<input id="reviewID" placeholder = "Review ID" />
<br/>
Enter the updated review
<br/>
<input id = "newReview"  placeholder = "Review" />
<br/>
Enter the updated Year of review
<br/>
<input id = "newYearOfReview"  placeholder = "Year of Review" />
<br/>
Enter the updated Rating 
<br/>
<input id = "newRating"  placeholder = "Review Rating" />
<br/>
{/* Enter the updated dietry information
<br/>
<input id ="newDietryInformation"  placeholder = "Dietry information" />
<br/> */}
<button className="btn btn-success" onClick={this.UpdateRecipe}>Update recipe</button>
</div>
)}
}
export default UpdateReview;