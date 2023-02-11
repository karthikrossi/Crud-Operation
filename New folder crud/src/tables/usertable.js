import React from "react";

const Usertable= (props) =>{
    return(
        <div>
            <h1>View User</h1>
            <table className="p-3 text-center bg-secondary">
                <thead className="p-3">
                    <tr >
                        <th>Name</th>
                        <th>Place</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="p-3">
                    {props.user.length > 0 ? (
                        props.user.map((user)=>(

                                    <tr className="p-3" key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td className="p-3">
                                            <button onClick={()=>props.editrow(user)} className="bg-success btn">Edit</button>
                                            <button onClick={()=>props.deletuser(user.id)} className="bg-danger btn">Delete</button>
                                        </td>
                                    </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan={3}>No user</td>
                        </tr>
                    )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Usertable;