import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import About from "../About/About";
import { useState, useEffect } from "react";
import Contact from "../Contact/Contact";

export default function Home({
  category,
  setCategory,
  products,
  searchQuery,
  setSearchQuery,
  handleAddItemToCart,
  handleRemoveItemToCart,
  filterProducts,
}) {
  return (
    <div id="buy" className="home">
      <Hero />
      <div className="sub-navbar">
        <div className="content">
          <div className="row">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <div className="links">
              <span className="help">
                <i id="help-icon" className="material-icons">
                  help
                </i>
                Help
              </span>
              <button className="cart">
                My Cart
                <i id="shopping-cart" className="material-icons">
                  shopping_cart
                </i>
                <Link to="/ShoppingCart" />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="menu-container">
              <ul className="category-menu">
                <li>
                  <button
                    className="all-categories"
                    onClick={() => {
                      setCategory("all categories");
                    }}
                  >
                    All Categories
                  </button>
                </li>
                <li>
                  <button
                    className="clothing"
                    onClick={() => {
                      setCategory("clothing");
                    }}
                  >
                    Clothing
                  </button>
                </li>
                <li>
                  <button
                    className="food"
                    onClick={() => {
                      setCategory("food");
                    }}
                  >
                    Food
                  </button>
                </li>
                <li>
                  <button
                    className="accessories"
                    onClick={() => {
                      setCategory("accessories");
                    }}
                  >
                    Accessories
                  </button>
                </li>
                <li>
                  <button
                    className="tech"
                    onClick={() => {
                      setCategory("tech");
                    }}
                  >
                    Tech
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductsGrid
        searchQuery={searchQuery}
        products={products}
        category={category}
      />
      <About />
      <Contact />
    </div>
  );
}
