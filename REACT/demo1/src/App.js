import React from 'react'
function App() {
const element =document.createElement("h1");

// involve step-by-step process to achive a particular position
// JavaScrpit has an imperative Syntax

element.textContent="hello imerative syntax";
document.body.appendChild(element);

  return (
   <div>
Focus on describing the desired result without specifying the step-by-step process
JSX in React used to write declarative
    <h1>hello  Declarative syntax</h1>
   </div>
  );
}

export default App;