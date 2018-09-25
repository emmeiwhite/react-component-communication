import React, { Component } from 'react';

import Child from './child';

// We are demonstrating Grand Parent to child relationship. Passing props from Grand Parent to child using rest operator
const Parent = (props)=>{
    return(
        <div>
            <Child {...props} />
        </div>
    )
}
export default Parent;