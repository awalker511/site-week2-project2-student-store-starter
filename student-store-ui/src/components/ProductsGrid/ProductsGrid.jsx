import React from "react";
import "./ProductsGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({
  searchQuery,
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  let productsList = [];
  if (searchQuery) {
    productsList = products.filter((productItem) => {
      return productItem.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  } else {
    productsList = products;
  }

  return (
    <div className="product-grid">
      <div className="content">
        <h3 className="best-sellers">Best Selling Products</h3>
        <div className="grid">
          {productsList.map((element) => {
            return <ProductCard product={element} showDescription={false} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
