import React from "react";
import "./ProductsGrid.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({
  quantity,
  cartProducts,
  category,
  searchQuery,
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  getQuantityOfItemInCart,
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
          {productsList.map((element, key) => {
            return (
              <ProductCard
                key={element.id}
                product={element}
                showDescription={false}
                quantity={getQuantityOfItemInCart(cartProducts, element)}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemToCart={handleRemoveItemToCart}
                cartProducts={cartProducts}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
