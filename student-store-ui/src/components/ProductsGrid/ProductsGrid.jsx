import React from "react";
import "./ProductsGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({
  category,
  searchQuery,
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) => {
  let productsList = [];
  if (searchQuery || category) {
    console.log(category);
    productsList = products.filter((productItem) => {
      if (category.toLowerCase() === "all categories")
        return productItem.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      else
        return (
          productItem.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          productItem.category === category.toLowerCase()
        );
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
