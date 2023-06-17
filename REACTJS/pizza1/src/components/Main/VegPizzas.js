import React from "react";
import { vegPizzaList, crusts } from "../Main/MenuLists";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VegPizzas = () => {
  const onSubmit = (data) => {
    console.log(data);
    toast.success(" Sucessfully Ordered !", {
      position: "top-right",
    });
  };

  const vegToppings = [
    {
      label: "Black olive - Rs.20",
      value: "Black olive - Rs.20",
    },
    {
      label: "Capsicum - Rs.25",
      value: "Capsicum - Rs.25",
    },
    {
      label: "Paneer - Rs.35",
      value: "Paneer - Rs.35",
    },
    {
      label: "Mushroom - Rs.30",
      value: "Mushroom - Rs.30",
    },
    {
      label: "Fresh Tomato - Rs.10",
      value: "Fresh Tomato - Rs.10",
    },
  ];
  const { register, handleSubmit, control } = useForm();

  return (
    <div>
      <h3 className="text-center my-3  " style={{ color: "orange" }}>
        Veg Pizzas{" "}
      </h3>
      <div className="container">
        <div className="nonVegItems">
          {vegPizzaList.map((pizza, i) => {
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
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>Price</th>
                          <th>order</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <td>Regular </td>
                          <td> Rs.{pizza.price.Regular}</td>
                          <td>
                            <button
                              type="button"
                              className="OrderBtn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Medium</td>
                          <td> Rs.{pizza.price.Medium}</td>
                          <td>
                            <button
                              type="button"
                              className="OrderBtn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Large</td>
                          <td>Rs .{pizza.price.Large}</td>
                          <td>
                            <button
                              type="button"
                              className="OrderBtn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="">
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 " id="exampleModalLabel">
                  Add Extra Toppings and Crusts
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ">
                <div className="topping my-2 border border-1 px-2 ">
                  <label className="headCrust mx-2">
                    {" "}
                    Select type of Topping :{" "}
                  </label>
                  <div className="mb-3 px-2">
                    <Controller
                      name="toppings"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select {...field} options={vegToppings} />
                      )}
                    />
                  </div>
                </div>
                <div className="crust border border-1 px-3 my-2">
                  <label className="headCrust">
                    {" "}
                    Select the Type of Crust :{" "}
                  </label>
                  <div className="mb-3">
                    {crusts.map((crust, i) => {
                      return (
                        <>
                          <div className="form-check py-1 mx-3 fs-5" key={i}>
                            <input
                              className="form-check-input"
                              type="radio"
                              value={crust}
                              name={crust}
                              id={i}
                              {...register("crust")}
                            />
                            <label className="form-check-label" htmlFor={i}>
                              {crust}
                            </label>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSubmit(onSubmit)}
                  data-bs-dismiss="modal"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* <!-- Modal Close --> */}
      </div>
    </div>
  );
};

export default VegPizzas;