import React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductView = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <div className="product-view-card">
        <ProductCard product={product} showDescription={true} />
      </div>
    </div>
  );
};

export default ProductView;
