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
  products,
  searchQuery,
  setSearchQuery,
  handleAddItemToCart,
  handleRemoveItemToCart,
  filterProducts,
}) {
  // const [searchQuery, setSearchQuery] = useState(products);

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
            <div className="hamburger-menu" onClick={(e) => {}}>
              <i id="menu-icon" className="material-icons">
                menu
              </i>
            </div>
            <ul className="category-menu">
              <li className="all-categories">
                <button
                  className=""
                  onClick={(e) => {
                    className = "isActive";
                    setCategory("all categories");
                  }}
                >
                  All Categories
                </button>
              </li>
              <li className="clothing">
                <button
                  className=""
                  onClick={(e) => {
                    className = "isActive";
                    setCategory("clothing");
                  }}
                >
                  Clothing
                </button>
              </li>
              <li className="">
                <button className="food">Food</button>
              </li>
              <li className="">
                <button className="accessories">Accessories</button>
              </li>
              <li className="">
                <button className="tech">Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ProductsGrid searchQuery={searchQuery} products={products} />
      <About />
      <Contact />
    </div>
  );
}
