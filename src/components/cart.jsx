import React from "react";
import { useDataContext } from "../contexts/DataContext";
import { filterDataOnStatus } from '../utils/utilFunctions';
import { WishlistButton } from './wishlistButton';
import { CartActions } from './cartActions';

function CartCard({product}){

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
          <CartActions
            key={product.id}
            product={product}
          />

          <WishlistButton
            key={product.id}
            product={product}
          />
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const {state} = useDataContext();
  const cartData = filterDataOnStatus(state.cart);

  return (
    <>
      <h1>Cart</h1>

      {cartData.length === 0 ? (<h3>No items in cart</h3>): (<ul>
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
      </ul>)}
    </>
  );
}