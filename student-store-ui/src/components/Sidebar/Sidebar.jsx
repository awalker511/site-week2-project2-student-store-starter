import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  productsList,
  handleAddItemToCart,
  handleRemoveItemToCart,
  handleCheckoutFormChange,
  checkOutForm,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section
      className={isOpen ? "sidebar open" : "sidebar closed"}
      id="sidebar"
    >
      <div className="wrapper">
        <button
          className={
            isOpen ? "toggle-button open" : "toggle-button button closed"
          }
          onClick={handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
      </div>
      {/* <div className="sidebar closed"> */}
      <div className="cart-icons">
        <span className="cart-icon icon button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
        <span className="cart-icon icon button">
          <i className="material-icons md-48">monetization_on</i>
        </span>
        <span className="cart-icon icon button">
          <i className="material-icons md-48">fact_check</i>
        </span>
      </div>
      <ShoppingCart
        productsList={productsList}
        shoppingCart={shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
      {/* <CheckoutForm
        isOpen={isOpen}
        checkOutForm={checkOutForm}
        shoppingCart={shoppingCart}
        handleCheckoutFormChange={handleCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
      /> */}
    </section>
  );
}
