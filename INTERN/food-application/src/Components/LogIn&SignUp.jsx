import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showFields, setShowFields] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Move useNavigate outside of handleSubmit

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

    // Perform login or signup logic here

    // Navigate to home page after successful login/signup
    navigate('/');
  };

  return (
    <div className="container">
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
  );
};

export default LogInSignUp;



