import React, { Component } from 'react';
import axios from 'axios';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tableArray: this.props.classData,
            type: "Add User",
            port: 8180
        });
    }

    async AddUser(){
        var url = "http://localhost:" + this.state.port + "/new-account/rest/Users/addUser";
        var data = {
            userName:document.getElementById('UsernameInput').value,
            dietryRequirements:document.getElementById('DietryRequirementsInput').value,
            emailAddress:document.getElementById('EmailAddressInput').value,
            age:document.getElementById('AgeInput').value,
        };
        axios.post(url, data).then((res) => {window.location.reload()});
    }

  render() {
    return (
      <div className="AddUser">
          <br/>
          <input id='UsernameInput' type='text' placeholder='Username' className="form-control"/><br/>
          <input id='DietryRequirementsInput' type='text' placeholder='DietryRequirements' className="form-control"/><br/>
          <input id='EmailAddressInput' type='text' placeholder='EmailAddress' className="form-control"/><br/>
          <input id='AgeInput' type='number' placeholder='Age' className="form-control"/><br/>
          <button id="SubmitButton" className="btn btn-success" onClick={() => this.AddUser()}>{this.state.type}</button>
          <div id="createDiv"></div>
      </div>
    );
  }
}
export default AddUser;