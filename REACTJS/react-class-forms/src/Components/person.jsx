import { Component } from "react";

export default class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                fname: "",
                lname: "",
                email: "",
            },
            allUsers: [
                {
                    fname: "Shekar",
                    lname: "Nani",
                    email: "shekar@gmail.com",
                },
                {
                    fname: "sai",
                    lname: "ram",
                    email: "sai@gmail.com",
                },
                {
                    fname: "Bujji",
                    lname: "kanna",
                    email: "bujji@gmail.com",
                },
            ],
            editIndex: null,
        };
    }
    handleChange = (e) => {
        var newPerson =      { ...this.state.person };
        newPerson[e.target.name] = e.target.value;
        this.setState({ person: newPerson });
        
    };
    // addUser = () => {
    //     console.log(this.state.person);
    //     var newAllUsers = [...this.state.allUsers];
    //     newAllUsers.push(this.state.person);
    //     this.setState({ allUsers: newAllUsers });
    //     this.clearForm();
    // };
    clearForm = () => {
        var newForm = {
            fname: "",
            lname: "",
            email: "",
        };
        this.setState({ person: newForm });
    };

    editUser = (usr, i) => {
        this.setState({ person: usr, editIndex: i });
    };

    deleteUser = (usr) => {
        var latestUsers = this.state.allUsers.filter(
            (myUser) => myUser.email !== usr.email
        );
        this.setState({ allUsers: latestUsers });
    };

    updateUser = () => {
        var latestUsers = [...this.state.allUsers];
        latestUsers[this.state.editIndex] = this.state.person;
        this.setState({ allUsers: latestUsers, editIndex: null });
        this.clearForm()
    };
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">First Name : </label>
                    <input type="text" name="fname" value={this.state.person.fname} onChange={(e) => { this.handleChange(e); }}
                    />{" "}
                    <br />
                    <br />
                    <label htmlFor="Last Name :">Last Name : </label>
                    <input type="text" name="lname" value={this.state.person.lname} onChange={(e) => { this.handleChange(e); }}
                    />{" "}
                    <br />
                    <br />
                    <label htmlFor="">Email : </label>
                    <input type="text" name="email" value={this.state.person.email} onChange={(e) => { this.handleChange(e); }}
                    />{" "}
                    <br />
                    <br />
                    {this.state.editIndex !== null ? (
                        <button
                            type="button"
                            onClick={this.updateUser}
                            className="btn btn-primary"
                        >
                            Update User
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={this.addUser}
                            className="btn btn-primary"
                        >
                            Add User
                        </button>
                    )}
                    
                </form>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr, i) => (
                            <tr key={i}>
                                <td>{usr.fname}</td>
                                <td>{usr.lname}</td>
                                <td>{usr.email}</td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => {
                                            this.editUser(usr, i);
                                        }}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            this.deleteUser(usr);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}