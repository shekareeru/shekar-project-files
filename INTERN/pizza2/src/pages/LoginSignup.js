import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';
import Baanner from '../images/pizza222.webp';
import BANER123 from '../images/banner2.jpg';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/material';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFields, setShowFields] = useState('');
  const [isLoginMode, setIsLoginMode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    setShowFields(true);
    setIsLoginMode(true);
  };

  const handleSignupClick = () => {
    setShowFields(true);
    setIsLoginMode(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    if (isLoginMode) {
      // Perform login logic
      navigate(`/home`);
    } else {
      // Perform signup logic
      navigate(`/home`);
    }
  };



  return (
    <div className="container">
      <div className="BANER123" style={{ backgroundImage: `url(${BANER123})` }}>
        <h1>WELCOME TO PIZZA HUT</h1>
        {!showFields && (
          <div className="buttons-container">
            <button type="button" onClick={handleLoginClick} className="login-button">
              Login
            </button>
            <button type="button" onClick={handleSignupClick} className="signup-button">
              Signup
            </button>
          </div>
        )}

        {showFields && (
          <form onSubmit={handleSubmit} className="form-container">
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} className="input-field" />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} className="input-field" />
            </label>
           
            <button type="submit" className="action-button">{isLoginMode ? 'Login' : 'Signup'}</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
      <div className="banner" style={{ backgroundImage: `url(${Baanner})` }}>

      </div>
      <footer className="footer">
  <div className="footer-sections">
    <div className="footer-section">
      <h3>COMPANY</h3>
      <ul>
        <li>About us</li>
        <li>Team</li>
        <li>Careers</li>
        <li>Pizza Blog</li>
        <li>Bug Bounty</li>
        <li>Pizza One</li>
        <li>Pizza Corporate</li>
        <li>Pizza Instamart</li>
        <li>Pizza Genie</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>CONTACT</h3>
      <ul>
        <li>Help & Support</li>
        <li>Partner with us</li>
        <li>Ride with us</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>LEGAL</h3>
      <ul>
        <li>Terms & Conditions</li>
        <li>Refund & Cancellation</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
    </div>
  </div>

  <div className="footer-icons">
  <p>&copy; 2023 Pizza Hut. All rights reserved.</p>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        "& svg": {
          fontSize: "60px",
          cursor: "pointer",
          marginRight: "10px",
        },
        "& svg:hover": {
          color: "goldenrod",
        },
      }}
    >
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
      <YouTubeIcon />
    </Box>
   
  </div>
</footer>

    </div>
  );
};

export default LoginSignup;
