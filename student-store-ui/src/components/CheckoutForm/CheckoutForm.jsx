import React from "react";
import { useState } from "react";
import "./CheckoutForm.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Sidebar from "../Sidebar/Sidebar";
const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkOutForm,
  handleCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  receipt,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="checkout-form">
      <h3>Payment Info</h3>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
            value={checkOutForm.name}
            onChange={handleCheckoutFormChange}
            required
          ></input>
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            value={checkOutForm.email}
            onChange={handleCheckoutFormChange}
            required
          ></input>
        </div>
      </div>
      <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>
        Checkout
      </button>
      {/* <div className="sidebar closed"> */}
      <div className="checkout-success">
        <h3>
          Checkout Info{" "}
          <span className="icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="card">
          <header class="card-head">
            <h4 className="card-title">Receipt</h4>
          </header>
          <section className="card-body">
            <p className="header"></p>
            {shoppingCart.length > 0 && (
              <ul className="purchase">
                {shoppingCart.map((element, index) => {
                  return (
                    <div className="full-receipt">
                      <p>Showing receipt for {}</p>
                      <li key={element.id}>
                        {element.quantity} total {element.name} purchased at a
                        cost of{" "}
                        {formatter.format(element.price * element.quantity)}
                      </li>
                    </div>
                  );
                })}
              </ul>
            )}
          </section>
          <footer className="card-foot">
            <button className="button">Exit</button>
          </footer>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CheckoutForm;
