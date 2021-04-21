import { useDataContext } from "../contexts/DataContext";
import { apiRequest } from "../utils/APIServices";
import React from "react";

export function CartActions({ product }) {
  const { dispatch } = useDataContext();

  const cartQtyHandler = async (incOrDec) => {
    try {
      if (!incOrDec && product.cartQty === 1) {
        await apiRequest({
          requestType: "PUT",
          url: "api/carts",
          dataId: product.id,
          data: { cart: { ...product, status: { exists: false } } },
        });
        dispatch({
          type: "REMOVE_ITEM_FROM_CART",
          payload: product,
        });
      } else {
        await apiRequest({
          requestType: "PUT",
          url: "api/carts",
          dataId: product.id,
          data: {
            cart: {
              ...product,
              cartQty: incOrDec ? product.cartQty + 1 : product.cartQty - 1,
            },
          },
        });
        incOrDec
          ? dispatch({
              type: "INC_ITEM_QTY_IN_CART",
              payload: product,
            })
          : dispatch({
              type: "DEC_ITEM_QTY_IN_CART",
              payload: product,
            });
      }
    } catch {
      console.log("could not update cart");
    }
  };

  return (
    <>
      <button
        onClick={() => cartQtyHandler(false)}
      >
        <span className="btn-icon">
          <i
            className={
              product.cartQty !== 1 ? "fas fa-minus" : "fas fa-trash-alt"
            }
          ></i>
        </span>
      </button>
      <span className="border-1px-square cart-qty-style">
        {product.cartQty}
      </span>

      <button
        onClick={() => cartQtyHandler(true)}
      >
        <span className="btn-icon">
          <i className="fas fa-plus"></i>
        </span>
      </button>
    </>
  );
}
