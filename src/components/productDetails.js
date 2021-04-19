import React from "react";
import { useParams } from "react-router";
import { useDataContext } from "../contexts/DataContext";
import { Link } from 'react-router-dom';
export default function ProductDetails() {
    
    const {productId} = useParams(); 
    const {products} = useDataContext();

  function getProductDetails(products, productId){
    return products.find((item)=> item.id ===productId);
  }
  
  const product = getProductDetails(products,productId);
  console.log(product);
  return (
    <>
      <h1>ProductDetails</h1>
    <p>{product.productName}</p>
    <p>{product.productPrice}</p>
    <Link to="/products">See all Products</Link>
    </>
  );
}
