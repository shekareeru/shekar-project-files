import { Component } from "react";

class Header extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return <div style={{background:"grey",color:"white",padding:10,fontWeight:"bold"}}>
            <h2>{this.props.message}</h2>
        </div>
    }
}
export default Header;