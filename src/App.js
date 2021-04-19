import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Address from "./components/address";
import "./styles/styles.css";
import Products from "./components/products.jsx";
import Cart from "./components/cart.jsx";
import Wishlist from "./components/wishlist.jsx";
import { Home } from "./components/home";
import { Login } from "./components/login";
import ProductDetails from "./components/productDetails";
import { NoMatch } from "./components/noMatch";

export default function App() {
  
  const activeStyleObj={
    fontWeight: "bold",
    color: "blue"}

  return (
    <div className="App">
      <h1>LumosFit</h1>
      <NavLink end to="/" activeStyle={activeStyleObj}>Home</NavLink> ||
      <NavLink to="/products" activeStyle={activeStyleObj}>Products</NavLink>||
      <NavLink to="/cart" activeStyle={activeStyleObj}>Cart</NavLink>||
      <NavLink to="/wishlist" activeStyle={activeStyleObj}>Wishlist</NavLink>||
      <NavLink to="/address" activeStyle={activeStyleObj}>Addresses</NavLink> ||
      <NavLink to="/login" activeStyle={activeStyleObj}>Login</NavLink>||
      <NavLink to="/logout" activeStyle={activeStyleObj}>Logout</NavLink>

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
  );
}
