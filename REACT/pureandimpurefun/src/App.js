import React from "react";
import ReactDOM from "react-dom";
// import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li key={number}>{number}</li>
  ));

  return (
    <div className="App">
      <ul>{listItems}</ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App />
);
export default App


