
import './App.css';
// default export  and destructiing export components
import Mainclasscomp, { Childclasscomp, Siblingclasscomp } from './COMPONENTS/MultipleClasscomp';
import Siblingfunction, { Childfunction, Mainfunction } from './COMPONENTS/MultipleFuncomp';
import MainFunction from './COMPONENTS/NestedFun';

// import MainComp from './COMPONENTS/MainCompo';
// import ABC from './COMPONENTS/MultipleComp';  
// import FuncCompo from './COMPONENTS/FuncCompo';
// import ClassComp from './COMPONENTS/ClassComp';

function App() {
  return (
    <div className="App">
     {/* <MainComp/> */}
     {/* <FuncCompo/> */}
     {/* <ClassComp/> */}
     {/* <ABC/> */}
     {/* <MainComp/> */}
     <Mainclasscomp/>
     <Childclasscomp/>
     <Siblingclasscomp/>
     <Siblingfunction/>
     <Childfunction/>
     <Mainfunction/>
     <MainFunction/>
    </div>
  );
}

export default App;
