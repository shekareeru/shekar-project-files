import { Component } from "react";

export default class Form2 extends Component{
constructor() {
    super();
    this.state = {
      person: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
      },
      allPerson: [
        {
            name: "sai",
            username: "ram",
            email: "sai@gmail.com",
            password: "12457",
            confirmpassword: "12457",
            message: "hi how are you sai",

        },
        {
            name: "nani",
        username: "kanna",
        email: "nani@gmail.com",
        password: "56789",
        confirmpassword: "56789",
        message: "hi how are you kanna",
        }



      ],
      editIndex:null
    };
  }
  addPerson = () => {
    // console.log (this.state.address)
    var newallPerson = [...this.state.allPerson];
    newallPerson.push(this.state.person);
    this.setState({allPerson:newallPerson});
    this.clearForm();
  };
  handleChange = (e) => {
    var newPerson = {...this.state.person};
    // console.log(e.target.name)
    // console.log(e.target.value)
    newPerson[e.target.name] = e.target.value;
    this.setState({person:newPerson});
  };
  clearForm = () => {
    var newForm = {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
    };
    this.setState({ person: newForm });
  };
  editUser=(per,i)=>{
    // console.log(addr)
    this.setState({person:per,editIndex:i})

  }
  deleteUser=(per)=>{
    // console.log(addr)
    var latestPerson=this.state.allPerson.filter((myperson)=> myperson.email !==per.email)
    this.setState({allPerson:latestPerson})

  }
  updatePerson=()=>{
    var latestPerson=[...this.state.allPerson];
    latestPerson[this.state.editIndex]=this.state.person;
    this.setState({allPerson:latestPerson,editIndex:null})
    this.clearForm();

  }
  render() {
    const { name,username,email,password,confirmpassword,message} = this.state.person;
    return (
      <div>
        <form>
          <h2>Bootstrap 4 Form Validation Demo</h2>
          <hr />
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="user name"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Email</label>

          <input
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Password</label>

          <input
            type="number"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">ConfirmPassword</label>
          <input
            type="number"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="confirmpassword"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Message</label>
          <input
            type="text"
            name="message"
            value={message}
            placeholder="message"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          {this.state.editIndex !==null? <button
            type="button"
            className="btn btn-secondary"
            onClick={this.updatePerson}
          >
        UpdatePerson
          </button>
          
          :<button
            type="button"
            className="btn btn-primary"
            onClick={this.addPerson}
          >
            Ok
          </button>}
         
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.updatePerson}
          >
        UpdatePerson
          </button>
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Message</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allPerson.map((per,i) => (
              <tr key={i}>
                <td>{per.name}</td>
                <td>{per.username}</td>
                <td>{per.email}</td>
                <td>{per.password}</td>
                <td>{per.confirmpassword}</td>
                <td>{per.message}</td>
                <td>
                    <button className="btn btn-warning" onClick={()=>{this.editUser(per,i)}}>Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger"onClick={()=>{this.deleteUser(per)}} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}