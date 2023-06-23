import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

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
      <div className="shopping-cart">
        <ShoppingCart
          productsList={productsList}
          shoppingCart={shoppingCart}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      </div>
    </section>
  );
}
