
// A Higher Order Component is a pattern used for
//  reusing component logic. 
// It is a function that takes a component 
// and returns a new component with additional functionality.


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