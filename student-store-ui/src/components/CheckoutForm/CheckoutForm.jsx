import React from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {
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
            value={checkoutForm.name}
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
            value={checkoutForm.email}
          ></input>
        </div>
      </div>
      <button
        className="checkout-button"
        onClick={handleOnSubmitCheckoutForm()}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutForm;
