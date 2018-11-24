import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class UpdateUser extends Component {
  constructor(props){
    super(props);
    this.state = ({
   
        port: 8180,
        data:[]
    });
}


  UpdateUser = (event) => {     
        var data = {
        userName:document.getElementById('newUsername').value,
        dietryRequirements:document.getElementById('newDietryRequirements').value,
        emailAddress:document.getElementById('newEmailAddress').value,
        age:document.getElementById('newAge').value

      };
      console.log(data);
      event.preventDefault();
      axios.put("http://localhost:" + this.state.port + "/new-account/rest/Users/updateUser/" + document.getElementById('userID').value, data).then((response) => {
        console.log(response.data);
       window.location.reload();
      });
    }

render() {
return (

<div>
Enter user ID
<br/>
<input id="userID" placeholder = "user ID" />
<br/>
Enter the updated Username
<br/>
<input id = "newUsername"  placeholder = "Username" />
<br/>
Enter the updated Dietry Requirments
<br/>
<input id = "newDietryRequirements"  placeholder = "Dietry Requirments" />
<br/>
Enter the updated email address
<br/>
<input id = "newEmailAddress"  placeholder = "Email Address" />
<br/>
Enter the updated age
<br/>
<input id ="newAge"  placeholder = "Age" />
<br/>
<button className="btn btn-success" onClick={this.UpdateUser}>Update User</button>
</div>
)}
}
export default UpdateUser;