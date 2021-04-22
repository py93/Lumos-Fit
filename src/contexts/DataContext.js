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
        const productResponse = await axios.get("https://lumosFit-service-APIs.hermoine93.repl.co/products");
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
