import { Component } from "react";
export default class Mainclasscomp extends Component{
    render(){
        return <h2>hello from main class component</h2>
    }
}

export  class Childclasscomp extends Component{
    render(){
        return <h2>hello from child class component</h2>
    }
}

export  class Siblingclasscomp extends Component{
    render(){
        return <h2>hello from sibling class component</h2>
    }
}