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
  const hasItems = !shoppingCart.length ? false : true;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let cartSubtotal = 0;
  let cartTaxes = 0;
  const cartProducts = shoppingCart.map((element) => {
    cartSubtotal += element.price * element.quantity;
    cartTaxes += element.price * element.quantity * 0.0875;
    return (
      <div className="product-row">
        <span className="center cart-product-name">{element.name}</span>
        <span className="center cart-product-quantity">{element.quantity}</span>
        <span className="center cart-product-price">{element.price}</span>
        <span className="center cart-product-subtotal">
          {element.price * element.quantity}
        </span>
      </div>
    );
  });
  return (
    <div className={hasItems ? "shopping-cart closed" : "shopping-cart open"}>
      <div className="shopping-cart open">
        <h3>Shopping Cart</h3>
        <div className="cartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Total Cost</span>
            </div>
            {cartProducts}
          </div>
          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span></span>
              <span></span>

              <span className="center subtotal">
                {formatter.format(cartSubtotal)}
              </span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span className="center">{formatter.format(cartTaxes)}</span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span></span>
              <span></span>
              <span className="center">
                {formatter.format(cartTaxes + cartSubtotal)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
