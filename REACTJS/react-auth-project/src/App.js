
import './App.css';
import { AuthProvider } from './Components/Auth';
import Navbar from './Components/NavBar';
import { RequiredAuth } from './Components/RequiredAuth';
import Products from './Components/Products';
import LoginComp from './Components/LoginComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <h2>Hello World from Auth Project</h2>
        <Routes>
          <Route path="/" element={<LoginComp />} />
          <Route
            path="/products"
            element={
              <RequiredAuth>
                <Products />
              </RequiredAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </div>
);
}

export default App; 