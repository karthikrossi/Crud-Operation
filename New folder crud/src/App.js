import React, { useState } from "react";
// import { BrowserRouter as  Routes, Route, Router } from "react-router-dom";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
// import Caro from "./components/carosel/carusel";
// import Menubar from "./component/navbar/bar";
// import Home from "./component/home/home";
// import SignIn from "./component/login/login";
// import DarkVariantExample from "./component/carosul/carosl";
import Usertable from "./tables/usertable";
import Aduser from "./tables/adduform";
import EditUserForm from "./tables/editform";
// import About from "./component/about/about";


function App() {


   const ddata =[
    {id:1,name:'karthik',username:'karthikrossi'},
    {id:2,name:'rossi',username:'valentino rossi'},
    ,
   ]

const adduser = (use)=>{
  user.id = user.length + 1;
  setUser([...user,use])
}

const deletuser=(id)=>{
  setUser(user.filter((user)=>user.id!==id))
}

const [user,setUser]= useState(ddata)

const [editing,setEditing]=useState(false)

const intform ={id:null,name:'',username:''}
const [cuurntuser,setCurrntuser]=useState(intform)

const editrow = (user)=>{
  setEditing(true);
  setCurrntuser({id:user.id,name:user.name,username:user.username})

}

const updateUser=(id,updateUser)=>{
  setEditing(false);
  setUser(user.map((user)=>(user.id===id?updateUser:user)))
}

  return (
    <div className="d-flex ">
     
      <div className="  col-lg 12 container" >
                  {editing?(<div className=" col-lg-6">
                  
                    <EditUserForm 
                    setEditing={setEditing}
                    cuurntuser={cuurntuser}
                    updateUser={updateUser}
                    
                    />
                  </div>):( <div className=" col-lg-6">
                    <Aduser adduser={adduser}/>
                    </div>
                  )}
                <div className=" col-lg-6">
                  <Usertable   editrow={editrow}  deletuser={deletuser} user={user}/>
                </div>
                
       
      </div>
      

    </div>
  );
}

export default App;

