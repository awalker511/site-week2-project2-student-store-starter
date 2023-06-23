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
import "./App.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function App() {
  //States
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState("all categories");
  const [isOpen, setIsOpen] = useState(false);
  const [checkOutForm, setCheckOutForm] = useState();
  const [error, setError] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  //const [quantity, setQuantity] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  //GET request
  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setProductsList(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {}, []);

  //Handler Functions
  function handleOnToggle() {
    setIsOpen(!isOpen);
  }
  const getQuantityOfItemInCart = (cart, item) => {
    let prodQ = cart?.find((prod) => item.id == prod.id);
    if (prodQ) {
      return prodQ["quantity"];
    }

    return 0;
  };

  const handleAddItemToCart = (product) => {
    let itemInCart = shoppingCart.find((item) => product.id === item.id); //finds item in cart that matches specific product id
    if (itemInCart) {
      let newCart = shoppingCart.map((item) => {
        if (item.id === itemInCart.id) {
          return { ...item, quantity: itemInCart.quantity + 1 };
        }
        return item;
      });
      setShoppingCart(newCart);
    } else {
      setShoppingCart([
        ...shoppingCart,
        {
          name: product.name,
          price: product.price,
          id: product.id,
          quantity: 1,
        },
      ]);
    }
  };

  const handleRemoveItemToCart = (product) => {
    let newCart = shoppingCart
      ?.map((item) => {
        if (item.id === product.id && item.quantity === 1) {
          let removedItems = shoppingCart.splice(shoppingCart[item.id]);
          return null;
        } else if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
      .filter(Boolean);
    setShoppingCart(newCart);
  };
  const handleCheckoutFormChange = (event) => {
    setCheckOutForm({ name: event.target.value, email: event.target.value });
  };
  const handleOnSubmitCheckoutForm = () => {
    setShoppingCart([]);
    setCheckOutForm({
      name: "",
      email: "",
    });
  };

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
                <div>
                  <Sidebar
                    handleOnToggle={handleOnToggle}
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    productsList={productsList}
                    checkOutForm={checkOutForm}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                    handleCheckoutFormChange={handleCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  />
                  <Home
                    products={productsList}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setCategory={setCategory}
                    category={category}
                    shoppingCart={shoppingCart}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                    cartProducts={shoppingCart}
                    getQuantityOfItemInCart={getQuantityOfItemInCart}
                  />
                </div>
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
          </Routes>
          <Navbar />
          {/* <Home products={productsList} /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
