// // FETCH-API
import React,{useEffect} from "react"
// import './App.css';

function App(){
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json())
    .then(json=>console.log(json))
  },[])
  return (
    <div className="App">
     <h2> this is fetch-API</h2>
    </div>
  );
}
export default App;


// AXIOS
 
// import React, { useEffect } from "react"
// import axios from "axios"

// function App(){
// useEffect(()=>{
//   axios.get("https://jsonplaceholder.typicode.com/todos")
//   .then((response=>console.log(response.data)))
// });
// return(
// <div>
//   <h2>this is axios</h2>
// </div>
// )
// }
// export default App;



// ASYNC-AWAIT

// import React, { useEffect } from "react"
// import axios from "axios"
 
// function App(){
//   useEffect(()=>{
//     (async()=>{
//       try{
//         const result=await axios.get("https://jsonplaceholder.typicode.com/posts")
//         console.log(result.data)
//       } catch(error){
//         console.log(error)
//       }
//     })()
//   })
// }


// export default App;


