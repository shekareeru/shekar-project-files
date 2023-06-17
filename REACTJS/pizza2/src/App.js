
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import About from "./pages/About";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
      
          <Route path="/"  element={<LoginSignup/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
