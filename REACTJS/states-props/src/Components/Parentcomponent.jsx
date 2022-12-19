import { Component } from "react";
import Header from "./Header";

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            welcome: "welcome to reactjs",
            employee: {
                fname: "sai",
                lname: "ram",
                email: "sairam@gmail.com",
                city: "karimnagar",
            }
        }
    }
    render() {
        return (
            <div>
                <h2>welcome to parent componenet</h2>
                {/* <Header {...this.state} /> */}
                <Header message={this.state.welcome}/>
            </div>
        )

    }
}
export default ParentComponent;