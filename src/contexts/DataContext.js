import React, { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "./../reducers/DataReducer";
import axios from "axios";


const DataContext = createContext();

const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  sortBy: "",
  filters: {
    filterByCategories: [],
    includeOutOfStock: true,
  },
};
export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const productResponse = await axios.get("/api/products");
        dispatch({
          type: "SET_PRODUCTS",
          payload: productResponse.data.products,
        });

        const cartResponse = await axios.get("/api/carts");
        dispatch({ type: "SET_CART", payload: cartResponse.data.carts });
        
        const wishlistResponse = await axios.get("/api/wishlists");
        dispatch({
          type: "SET_WISHLIST",
          payload: wishlistResponse.data.wishlists,
        });

      } catch (err) {
        console.log("Error message: ", err);
      }
    })(); //IFFE
  }, []);

  return (
    <>
      {/* <DataContext.Provider value={{state, dispatch, products, setProducts, cartItems, setCartItems}}> */}
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
