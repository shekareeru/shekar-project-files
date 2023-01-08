import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

import CreateUser from './Components/Create';
import Deleteuser from './Components/Deleteuser';
import EditUser from './Components/EditUser';
import Users from './Components/Users';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/delete/:id" element={<Deleteuser />} />
        <Route path="/create" element={<CreateUser />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;
