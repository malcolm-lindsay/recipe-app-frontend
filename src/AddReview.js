import React, { Component } from 'react';
import axios from 'axios';
import{port, ip} from './Constants.jsx';

class AddReview extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.data,
            type: "Add Review",
        });
    }

    async AddReview(){
        var url = ip + port + "/new-account/rest/Reviews/createReview";
        var data = {
            nameOfRecipe:document.getElementById('nameOfRecipeInput').value,
            yearOfReview:document.getElementById('yearOfReviewInput').value,
            rating:document.getElementById('ratingInput').value,
        };
        axios.post(url, data).then((res) => {window.location.reload()});
    }

  render() {
    return (
      <div className="AddReview">
          <br/>
          <input id='nameOfRecipeInput' type='text' placeholder='Review' className="form-control"/><br/>
          <input id='yearOfReviewInput' type='text' placeholder='Year of Review' className="form-control"/><br/>
          <input id='ratingInput' type='number' placeholder='Review Rating' className="form-control"/><br/>
          <button id="SubmitButton" className="buttons" onClick={() => this.AddReview()}>{this.state.type}</button>
          <div id="createDiv"></div>
      </div>
    );
  }
}
export default AddReview;
