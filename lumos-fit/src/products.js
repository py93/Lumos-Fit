import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    //add try catch loader
    (async function () {
      const productData = await axios.get("/api/products");
      setProducts(productData.data.products);
    })();
  }, []);

  function addToCart(product) {
    setCartItems((cartItems) => cartItems.concat({ ...product, qty: 1 }));
  }

  // function addToCart1(product){
  //   if(cartItems.find(({ id }) => id === product.id) ===)
  //   {

  //   }
  //   else{

  //   }
  // }
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li
            style={{
              border: "1px solid black",
              padding: "1rem",
              margin: "1rem",
              listStyleType: "none"
            }}
            key={product.id}
          >
            {product.productName}<br/>  Rs.{product.productPrice}<br/> 
            <button onClick={() => addToCart(product)}>Add to cart</button>
            <button>Add to wishlist</button>
          </li>
        ))}
      </ul>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((cartItem) => (
          <li
            style={{
              border: "1px solid black",
              padding: "1rem",
              margin: "1rem",
              listStyleType: "none"
            }}
            key={cartItem.id}
          >
            {cartItem.productName}<br/> Rs.{cartItem.productPrice}<br/> Qty:{cartItem.qty}<br/>
            <button>Remove from cart</button>
            <button>Add to wishlist</button>
          </li>
        ))}
      </ul>
    </>
  );
}
