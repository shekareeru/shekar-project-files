
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Login from './components/Login';
import RestaurantDetails from './components/RestaurantDetails';
import ShopingCart from './components/ShopingCart';
import SignUp from './components/SignUp';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/restaurants/:id" component={RestaurantDetails} />
        <Route path="/cart" component={ShopingCart} />
      </Routes>
    </Router>
  </Provider>
);
}


export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import Home from './components/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import RestaurantDetails from './components/RestaurantDetails';
// import ShoppingCart from './components/ShoppingCart';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={SignUp} />
//           <Route path="/restaurants/:id" component={RestaurantDetails} />
//           <Route path="/cart" component={ShoppingCart} />
//         </Switch>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
