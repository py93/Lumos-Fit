import React from "react";
import { useDataContext } from "../contexts/DataContext";
import { apiRequest } from "../utils/APIServices";
import { filterDataOnStatus } from "../utils/utilFunctions";
import { AddToCartButton } from './cartButton';

function WishlistCard({product}) {

  const {dispatch} = useDataContext();

  async function removeFromWishlist(){
    try{
      await apiRequest({requestType: "PUT", url: "api/wishlist", dataId: product.id, data: {wishlist: {...product, status: {exists:false}}}});
      dispatch({type:"ADD_REMOVE_ITEM_TO_WISHLIST", payload: product})
    }
    catch{
      console.error("Could not remove from wishlist");
    }
  }
  return(<>
      <div className="card-vertical border-width-1px">
     
      
      <div className="image-container badge-container">
        <img
          className="img-responsive card-img"
          src={product.image}
        />
        <span
          style={{ display: product.inStock ? "none" : "block" }}
          class="badge bg-primary"
        >
          Out of stock
        </span>
      </div>
      <div className="text-container">
        <div className="text-container-title">
          <h6 className="text-regular-weight product-title">{product.name}</h6>
        </div>
        <div className="text-container-desc">
          <p className="text-regular-weight body-cp-md">
            Rs.{product.price}
          </p>
        </div>
        <button className="button button-primary"
        type="button"
        onClick={removeFromWishlist}
      >Remove from wishlist</button>
        <div className="CTA-Container">
          <AddToCartButton
            key={product.id}
            product={product}
          />
        </div>
      </div>
    </div>
  </>);
}

export default function Wishlist() {

  const {state} = useDataContext();
  const data = filterDataOnStatus(state.wishlist);

  return (
    <>
      <h1>Wishlist</h1>
      <span>{data.length} items</span>
      <div>{
        data.map((product)=> (
          <WishlistCard key={product.id} product={product}/>
        ))
      }</div>
    </>
  );
}