import { useDataContext } from "../contexts/DataContext";
import { checkStatus, isAdded } from "../utils/utilFunctions";
import React from "react";
import { apiRequest } from "../utils/APIServices";
import { useNavigate } from "react-router-dom";

export function AddToCartButton({product}){

    const {state,dispatch} = useDataContext();
    const navigate = useNavigate();


    async function addToCartHandler(){
         try {
            if (checkStatus(state.cart, product.id)) {
              navigate("/cart");
            } else {
              if (isAdded(state.cart, product.id)) {
                // await apiRequest({
                //   requestType: "PUT",
                //   url: "api/carts",
                //   dataId: product.id,
                //   data: { cart: { ...product, status: { exists: true } } }
                // });
              } else {
                // await apiRequest({
                //   requestType: "POST",
                //   url: "api/carts",
                //   data: { cart: { ...product, status: { exists: true } } }
                // });
              }
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...product, status: { exists: true } }
              });
             
            }
          } catch {
            console.error("Could not update cart");
          } 
    };
    return (
        <>
          <button className="button button-primary alt"
            style={{ display: !product.inStock ? "none" : "block" }}
            onClick={addToCartHandler}
          >
            {checkStatus(state.cart, product.id)
              ? "Go to Cart"
              : "Add to Cart"}
          </button>
        </>
      );
}