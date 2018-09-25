import React,{Component} from 'react';


const User = (props)=>{
    return (
        <li>Name is :{props.children}, Age is: {props.age}, Profession is {props.profession}</li>
    )
}

export default User;