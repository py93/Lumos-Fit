import React from "react";
import { Routes, Route} from "react-router-dom";
import Address from "./components/address";
import "./styles/styles.css";
import Products from "./components/products.jsx";
import Cart from "./components/cart.jsx";
import Wishlist from "./components/wishlist.jsx";
import { Home } from "./components/home";
import { Login } from "./components/login";
import ProductDetails from "./components/productDetails";
import { NoMatch } from "./components/noMatch";
import { Header } from "./components/header";

export default function App() {
  
  const activeStyleObj={
    fontWeight: "bold",
    color: "blue"}

  return (
    <div className="App">
    <div className="app-container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="product/:productId" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NoMatch />}/>
      </Routes>
      </div>
    </div>
  );
}
