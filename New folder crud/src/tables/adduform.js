import React from "react";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Aduser =(props) => {

const intform ={id:null,name:'',username:''}

const [user,setUser]=useState(intform)

const handleInputChange =(event)=>{
  const{name,value} = event.target

  setUser({...user,[name]:value})
}

 return(
    <>
    <div>
        <h1>Add User</h1>
    <form  className="bg-info text-center" onSubmit={
        event=>{
            event.preventDefault();
            if(!user.name || !user.username) return;

            props.adduser(user);
            setUser(intform);
        }
    }>
        <label>Name</label><br></br>
        <input type="text" onChange={handleInputChange}  name="name" value={user.name}/><br></br>
        <label>Place</label><br></br>
        <input type="text" onChange={handleInputChange} name="username" value={user.username}/><br></br>
        <br></br>
        <button className="btn bg-primary">Add new User</button>
    </form>
    </div>
    </>
 )
}
export default Aduser;