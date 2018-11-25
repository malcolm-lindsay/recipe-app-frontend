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
        review:document.getElementById('newReview').value,
        yearOfReview:document.getElementById('newYearOfReview').value,
        rating:document.getElementById('newRating').value,
        // dietryInformation:document.getElementById('newDietryInformation').value
      };
      // event.preventDefault();
      axios.put("http://localhost:" + port + "/new-account/rest/Reviews/updateReview/" + document.getElementById('reviewID').value, data).then((response) => {
        // event.preventDefault();
        // this.forceUpdate()
      window.reload.location();
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

<button className="btn btn-success" onClick={this.UpdateReview}>Update review</button>
</div>
)}
}
export default UpdateReview;