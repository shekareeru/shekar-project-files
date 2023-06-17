import React from 'react'

import nonVegPizza from "../images/pizza1.jpeg";
import vegPizza from "../images/vegPizza.jpg";
import sides from "../images/sides.jpeg";
import { useNavigate } from "react-router-dom";

const DisplayMenu = () => {
  const navigate = useNavigate();
  const nonVegPizzaItem = () => {
    navigate("/nonVegPizza");
    // console.log("triggered");
  };
  const vegPizzaItem = () => {
    navigate("/vegPizza");
    // console.log("triggered");
  };
  const sidesItem = () => {
    navigate("/sides");
    // console.log("triggered");
  };
  return (
    <div className="container displayBackGround">
      <div className="menuItems">
        <div className="menuItem">
          <div className="">
            {/* <button className='nonvegPizza '> */}
            <img
              src={nonVegPizza}
              alt=""
              onClick={nonVegPizzaItem}
              className="nonvegPizza"
            />
            {/* </button> */}
          </div>
          <div className="my-3">
            <h3>Non veg pizza </h3>
          </div>
        </div>
        <div className="menuItem">
          <div className="">
            <img
              src={vegPizza}
              alt=""
              onClick={vegPizzaItem}
              className="nonvegPizza"
            />
          </div>
          <div className="my-3">
            <h3> Veg pizza </h3>
          </div>
        </div>
        <div className="menuItem">
          <div className="">
            <img
              src={sides}
              alt=""
              onClick={sidesItem}
              className="nonvegPizza"
            />
          </div>
          <div className="my-3">
            <h3>Beverages</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DisplayMenu