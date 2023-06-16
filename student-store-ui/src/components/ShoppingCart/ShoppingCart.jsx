import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = (isOpen = false, products, shoppingCart, quantity) => {
  return (
    <div className="shopping-cart">
      <div className="cart-product-name">
        {products.map((element, index) => {})}
      </div>
      <div className="cart-product-quantity">{}</div>
    </div>
  );
};

export default ShoppingCart;
