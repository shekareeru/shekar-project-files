import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
          <Link to={"/ Cart"} className="nav-link active">Cart</Link>
          </li>
          <li className="nav-item">
          <Link to={"/contact"} className="nav-link active">Contact</Link>
          </li>
          {/* <li className="nav-item"> */}
          {/* <Link to={"/signup"} className="nav-link active">SIGN UP</Link> */}
          {/* </li> */}
          <li className="nav-item">
          <Link to={"/login"} className="nav-link active">LogIn&SignUp</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
};
export default NavBar;