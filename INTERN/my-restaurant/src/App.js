
import './App.css';
// import Layout from './COMPONENTS/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './PAGES/Home';
import About from './PAGES/About';
import Menu from './PAGES/Menu';
import Contact from './PAGES/Contact';
import Error from './PAGES/Error';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
