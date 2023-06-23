import React, { useState } from "react";
import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductCard = ({
  product,
  quantity,
  cartProducts,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription = true,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  // let cartItem = cartProducts?.find((item) => product.id === item.id);
  // if (cartItem) {
  //   console.log(cartItem);
  //   setProductQuantity(cartItem.quantity);
  // }

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${product.id}`}>
          <img src={product.image}></img>{" "}
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <div className="product-id">#{product.id}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-price">{formatter.format(product.price)}</div>
          <div></div>
        </div>
        <div className="actions">
          <div className="buttons">
            <button
              className="remove"
              onClick={() => handleRemoveItemToCart(product)}
            >
              <i className="material-icons">remove</i>
            </button>
            {quantity > 0 && <div className="quantity-count">{quantity}</div>}

            <button
              className="add"
              onClick={() => handleAddItemToCart(product)}
            >
              <i className="material-icons">add</i>
            </button>
          </div>
          {showDescription ? (
            <div className="product-description">{product.description}</div>
          ) : (
            <div className="product-description">{}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
