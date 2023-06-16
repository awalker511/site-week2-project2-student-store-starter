import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import Hero from "../Hero/Hero";
import "./App.css";
import ProductView from "../ProductView/ProductView";

export default function App() {
  //States
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState("all categories");
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [quantity, setQuantity] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  //GET request
  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setProductsList(response.data.products);
        console.log("api is working", response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {}, []);

  //category filter
  // const filterProducts = productsList?.filter((product) => {
  //   const buttonCat = category === "all categories" ? "" : category;
  //   const categoryMatch =
  //     buttonCat === "" || buttonCat === productsList?.category;
  //   return categoryMatch;
  // });

  //Handler Functions

  const handleAddItemToCart = (productId) => {
    // setShoppingCart([productId= product.id, quantity += 1]);
    // quantity += 1;
  };

  const handleRemoveItemToCart = (productId) => {};
  //add button onclick

  if (productsList.length === 0) {
    <p>Loading...</p>;
  }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={productsList}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetail
                  product={productsList.filter((item) => {
                    const { productId } = useParams();
                    item.id === useParams().productId;
                  })}
                />
              }
            />
            {/* <Route path="cart" element={} /> */}
          </Routes>
          <Navbar />
          {/* <Sidebar /> */}
          {/* <Home products={productsList} /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
