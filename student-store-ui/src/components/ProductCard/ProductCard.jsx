import React from "react";
import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductCard = ({
  product,
  quantity = 0,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription = true,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${product.id}`}>
          <img src={product.image}></img>{" "}
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <div className="product-id">{product.id}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-price">{formatter.format(product.price)}</div>
          <div>
            {showDescription ? (
              <div className="product-description">{product.description}</div>
            ) : (
              <div className="product-description">{}</div>
            )}
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="buttons">
          <button
            className="add"
            onClick={(e) => {
              quantity += 1;
            }}
          >
            <i className="material-icons">add</i>
          </button>
          <button
            className="remove"
            onClick={(e) => {
              quantity ? (quantity -= 1) : (quantity = { quantity });
            }}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
