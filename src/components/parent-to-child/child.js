import React, { Component } from 'react';

const Child = (props)=>{
    return(
        <button onClick={props.demandOfChild}>{props.headline}</button>
    )
}
export default Child;