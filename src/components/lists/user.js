import React,{Component} from 'react';


const User = (props)=>{
    return (
        <li className="User">
            Name is :{props.children}, Age is: {props.age}, Profession is {props.profession} 
            <button onClick={props.userEvent}>delete</button>
            <input type="text" onChange={props.changeEvent} value={props.children}/> {/* To make sure we change the user name based on the input- For two-way binding, we use value*/}
        </li>
    )
}

export default User;