import React, { useEffect, useState } from "react";
import Address from "./address";
import "./styles.css";
import Products from "./products";
import Cart from "./cart";
import Wishlist from "./wishlist";

export default function App() {
  const [route, setRoute] = useState("products");

  return (
    <div className="App">
      <h1>Ecommerce</h1>
      {/* <button onClick={() => setRoute("products")}>Products</button>
      <button onClick={() => setRoute("cart")}>Cart</button>
      <button onClick={() => setRoute("wishlist")}>Wishlist</button>
      <button onClick={() => setRoute("address")}>Manage your addresses</button>
      {route === "products" && <Products />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <Wishlist />}
      {route === "address" && <Address />} */}
      <Products />
      {/* <Cart />
      <Wishlist />
      <Address /> */}
    </div>
  );
}
