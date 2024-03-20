// import logo from './logo.svg';
// import './App.css';
// import HOC from './COMPONENTS/hoc';

// const App=({value})=>{

//   return (
//     <div className="App">
//       <h1>This is {value.name}</h1>
//       <h1>Iam a {value.role}</h1>
//     </div>
//   );
// }

// export default HOC(App);

import React from 'react'
import HOC from './HOC';
const App =(props)=>{

return(
  <h1> welcome to USER{props.name}</h1>
)
}
export default HOC(App);
