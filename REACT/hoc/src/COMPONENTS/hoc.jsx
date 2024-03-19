

import React from 'react'

const HOC =(Component) =>{

    const simpleObj = {
        name:"SHEKAR",
        age: 23,
        role:"Frontendevloper",
    };
    return ()=> <Component value={simpleObj}/>;
};
export default HOC;