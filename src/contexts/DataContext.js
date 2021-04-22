import React, { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "./../reducers/DataReducer";
import axios from "axios";
import { PRODUCT_URL } from './../utils/constants';

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
        const productResponse = await axios.get(PRODUCT_URL);
        dispatch({
          type: "SET_PRODUCTS",
          payload: productResponse.data.products,
        });
        
      } catch (err) {
        console.log("Error message: ", err);
      }
    })(); //IFFE
  }, []);

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
