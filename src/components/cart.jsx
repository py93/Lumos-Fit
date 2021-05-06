import React from "react";
import { useDataContext } from "../contexts/DataContext";
import { filterDataOnStatus } from "../utils/utilFunctions";
import { WishlistButton } from "./wishlistButton";

function CartActions({ product }) {
  const { dispatch } = useDataContext();

  const cartQtyHandler = async (incOrDec) => {
    try {
      if (!incOrDec && product.cartQty === 1) {
        dispatch({
          type: "REMOVE_ITEM_FROM_CART",
          payload: product,
        });
      } else {
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
      <button onClick={() => cartQtyHandler(false)}>
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

      <button onClick={() => cartQtyHandler(true)}>
        <span className="btn-icon">
          <i className="fas fa-plus"></i>
        </span>
      </button>
    </>
  );
}
function CartCard({ product }) {
  return (
    <div className="card-horizontal border-width-1px default-container">
      <div className="image-container">
        <img
          className="img-responsive card-img"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="text-container">
        <div className="text-container-title">
          <h6 className="text-regular-weight">{product.name}</h6>
        </div>

        <div className="text-container-desc">
          <p className="text-regular-weight body-cp-md">
            Rs.{product.price * product.cartQty}
          </p>
        </div>
        <div className="CTA-Container">
          <CartActions key={product.id} product={product} />

          <WishlistButton key={product.id} product={product} />
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const { state } = useDataContext();
  const cartData = filterDataOnStatus(state.cart);

  return (
    <>
      <h1>Cart</h1>

      {cartData.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        <ul>
          {cartData.map((cartItem) => (
            <li
              style={{
                border: "1px solid black",
                padding: "1rem",
                margin: "1rem",
                listStyleType: "none",
              }}
              key={cartItem.id}
            >
              <CartCard key={cartItem.id} product={cartItem}></CartCard>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
