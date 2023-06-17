import React from "react";
import { sides } from "../Main/MenuLists";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sides = () => {
  const addSides = ()=>{
    toast.success(" Sucessfully Ordered !")
  }
  return (
    <div>
      <h3 className="text-center my-3  " style={{ color: "orange" }}>
        Sides{" "}
      </h3>
      <div className="container">
        <div className="nonVegItems">
          {sides.map((pizza, i) => {
            return (
              <>
                <div
                  className="item border border-2 rounded rounded-3 Box1 "
                  key={i}
                >
                  <div className="p-3">
                    <img
                      src={pizza.image}
                      alt=""
                      className="nonvegPizza1 p-3"
                    />
                  </div>
                  <div className="">
                    <h3>{pizza.name}</h3>
                  </div>
                  <div className="">
                    <h3> price : Rs.{pizza.price}/-</h3>
                  </div>
                  <div className="mb-3 py-2">
                    <button
                      type="button"
                      className="OrderBtn1"
                      onClick={addSides}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Sides;