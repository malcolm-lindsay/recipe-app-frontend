import React, { Component } from 'react';
import axios from 'axios';
import{port} from './Constants.jsx';

class UpdateReview extends Component {
  constructor(props){
    super(props);
    this.state = ({
        data:[]
    });
}


  UpdateReview = (event) => {
        var data = {
        nameOfRecipe:document.getElementById('newNameOfRecipe').value,
        yearOfReview:document.getElementById('newYearOfReview').value,
        rating:document.getElementById('newRating').value,
        // dietryInformation:document.getElementById('newDietryInformation').value
      };
 
      axios.put("http://localhost:" + port + "/new-account/rest/Reviews/updateReview/" + document.getElementById('reviewID').value, data).then((response) => {

      window.reload.location();
      //try window.location.reload

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
<input id = "newNameOfRecipe"  placeholder = "Name of recipe" />
<br/>
Enter the updated Year of review
<br/>
<input id = "newYearOfReview"  placeholder = "Year of Review" />
<br/>
Enter the updated Rating 
<br/>
<input id = "newRating"  placeholder = "Review Rating" />
<br/>

<button className="btn btn-success" onClick={this.UpdateReview}>Update review</button>
</div>
)}
}
export default UpdateReview;