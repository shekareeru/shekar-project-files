import Component from "react";

class PureComp extends Component{
    render(){
        console.log("pure comp render")
        return (
            <div>
                pure components {this.props.name}
            </div>
        )
    }
}
export default PureComp