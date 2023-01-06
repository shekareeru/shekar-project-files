import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import { Route, Routes, outlet , Link, BrowserRouter  } from "react-router-dom";
import Nomatch from './Components/Nomatch';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
