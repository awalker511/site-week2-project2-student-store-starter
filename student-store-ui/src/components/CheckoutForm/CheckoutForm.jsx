import React from "react";
import { useState } from "react";
import "./CheckoutForm.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

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
      <div className="checkout-success">
        <h3>
          Checkout Info{" "}
          <span class="icon button">
            <i class="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div class="card">
          <header class="card-head">
            <h4 class="card-title">Receipt</h4>
          </header>
          <section class="card-body">
            <p class="header"></p>
            {shoppingCart.length > 0 && (
              <ul class="purchase">
                {shoppingCart.map((element, index) => {
                  return (
                    <li key={element.id}>
                      {element.quantity} total {element.name} purchased at a
                      cost of{" "}
                      {formatter.format(element.price * element.quantity)}
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
          <footer class="card-foot">
            <button class="button">Exit</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
