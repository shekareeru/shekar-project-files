// import logo from './logo.svg';
import './App.css';
import HOC from './COMPONENTS/hoc';

const App=({value})=>{

  return (
    <div className="App">
      <h1>This is {value.name}</h1>
      <h1>Iam a {value.role}</h1>
    </div>
  );
}

export default HOC(App);
