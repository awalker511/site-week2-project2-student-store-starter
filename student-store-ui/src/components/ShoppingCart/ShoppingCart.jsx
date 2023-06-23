import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({
  isEmpty = true,
  product,
  productsList,
  shoppingCart,
  quantity = 0,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  console.log("Shoppingcart Component", shoppingCart);
  const hasItems = !shoppingCart.length ? false : true;
  //const matchProducts= match the ids to the products in productlist and then get the names and prices and quantity, add to array of objects and map through new array instead
  const cartProducts = shoppingCart.map((element, index) => (
    <div>
      <div className="center cart-product-name">{element.name}</div>
      <div className="center cart-product-quantity">{element.quantity}</div>
      <div className="center subtotal">{element.price}</div>
    </div>
  ));

  return (
    <div className={hasItems ? "shopping-cart closed" : "shopping-cart open"}>
      <h3>Shopping Cart</h3>
      <div className="shopping-cart open">
        <div className="cartTable">
          <div className="header">
            <div className="product-row">
              <div className="header-row">
                <span className="flex-2">Name</span>
                <span className="center">Quantity</span>
                <span className="center">Unit Price</span>
                <span className="center">Total Cost</span>
              </div>
              {cartProducts}
            </div>
          </div>
          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span></span>
              <span></span>
              <span className="center subtotal"></span>
            </div>
            <div className="receipt-taxes"></div>
            <div className="receipt-total"></div>
          </div>
        </div>
      </div>
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
              value=""
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
              value=""
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
