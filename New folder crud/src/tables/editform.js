import React from "react"
// import 'bootstrap/dist/css.bootstrap.mi.css'
import { useEffect, useState } from "react"

const EditUserForm = (props)=>{
 const[user,setUser]=useState(props.cuurntuser)

useEffect(()=>{
setUser(props.cuurntuser)
},[props])

 const handleInputChange =(event)=>{
    const{name,value} = event.target
  
    setUser({...user,[name]:value})
  }

  return(
    <>
    <h1>Edit user</h1>
    <form className="bg-primary text-center"  onSubmit={
        event=>{
            event.preventDefault();
            if(!user.name || !user.username) return;

            props.updateUser(user.id,user);
          
        }
    }>
        <label>Name</label><br></br>
        <input type="text" onChange={handleInputChange}  name="name" value={user.name}/><br></br>
        <label>Place</label><br></br>
        <input type="text" onChange={handleInputChange} name="username" value={user.username}/><br></br><br></br>
        <button className="bg-success btn">Update user</button>
        <button className="bg-warning btn" onClick={()=>{
            props.setEditing(false)
        }}>Cancel</button>
    </form>
    </>
  )
}

export default EditUserForm;