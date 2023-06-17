
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import DisplayMenu from './components/Main/DisplayMenu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        
        <Route exact path="/" element={<DisplayMenu />} />
        <Route exact path="/nonVegPizza" element={<NonVegPizzas />} />
        <Route  path="/vegPizza" element={<VegPizzas />} />
        <Route  path="/sides" element={<Sides />} />
      </Routes>
    </div>
  );
}

export default App;
