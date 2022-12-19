import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee';
import ParentComponent from './Components/Parentcomponent';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      {/* <Employee/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
