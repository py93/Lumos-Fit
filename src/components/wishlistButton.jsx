import { useDataContext } from "../contexts/DataContext";
import {checkStatus, isAdded} from "../utils/utilFunctions";
import React from "react";
import {apiRequest} from "../utils/APIServices";

export function WishlistButton({product}){

    const {state, dispatch} = useDataContext();

      async function likeHandler() {
        
        try {
          if (isAdded(state.wishlist, product.id)) {
            // await apiRequest({
            //   requestType: "PUT",
            //   url: "api/wishlists",
            //   dataId: product.id,
            //   data: {
            //     wishlist: {
            //       ...product,
            //       status: { exist: !checkStatus(state.wishlist, product.id) }
            //     }
            //   }
            // });
          } else {
            // await apiRequest({
            //   requestType: "POST",
            //   url: "api/wishlists",
            //   dataId: product.id,
            //   data: {
            //     wishlist: { ...product, status: { exist: true } }
            //   }
            // });
          }
          dispatch({
            type: "ADD_REMOVE_ITEM_TO_WISHLIST",
            payload: product
          });
        } catch {
          console.error("Could not update wishlist")
        }
      };
      return (
        <button className="button button-secondary" onClick={likeHandler}
        >
          {checkStatus(state.wishlist, product.id)? "Remove from wishlist" : "Add to wishlist"}
        </button>
      );
}