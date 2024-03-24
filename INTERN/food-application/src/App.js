
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import LogInSignUp from './Components/LogIn&SignUp';
import Cart from './Components/Cart';
import Sweets from './Components/Sweets';
import LoveBItes from './Components/LoveBItes';
import Snacks from './Components/Snacks';
import Fryums from './Components/Fryums';
import VegPickles from './Components/VegPickles';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic and set isLoggedIn to true upon successful login
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
       <div className="marquee">
        <marquee>
          <h6>This is a sample scrolling text that has scrolls in the towords left
          direction.</h6>
        </marquee>
      </div>
      <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Login" element={<LogInSignUp  onLogin={handleLogin}/>}/>
        {isLoggedIn ?(
          <>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Sweets" element={<Sweets/>}/>
        <Route path="/LoveBites" element={<LoveBItes/>}/>
        <Route path="/Snacks" element={<Snacks/>}/>
        <Route path="/Fryums" element={<Fryums/>}/>
        <Route path="/Veg-Pickles" element={<VegPickles/>}/>
        </>
        ):( 
          <Route path="*" element={<LogInSignUp onLogin={handleLogin} />} />
        )}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
