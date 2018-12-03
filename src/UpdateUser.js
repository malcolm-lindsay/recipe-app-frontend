import React, { Component } from 'react';
import axios from 'axios';
import{port, ip} from './Constants.jsx';
import './App.css'

class UpdateUser extends Component {
  constructor(props){
    super(props);
    this.state = ({
        data:[]
    });
}

  UpdateUser = (event) => {     
        var data = {
        userName:document.getElementById('newUsername').value,
        dietryRequirements:document.getElementById('newDietryRequirements').value,
        phoneNumber:document.getElementById('newPhoneNumber').value,
        age:document.getElementById('newAge').value

      };
      console.log(data);
      event.preventDefault();
      axios.put(ip + port + "/new-account/rest/Users/updateUser/" + document.getElementById('userID').value, data).then((response) => {
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
Enter the updated phone number
<br/>
<input id = "newnewPhoneNumber"  placeholder = "Email Address" />
<br/>
Enter the updated age
<br/>
<input id ="newAge"  placeholder = "Age" />
<br/>
<button className="buttons" onClick={this.UpdateUser}>Update User</button>
</div>
)}
}
export default UpdateUser;
