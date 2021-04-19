import { useDataContext } from "../contexts/DataContext";
import React from "react";
import {categories} from "../api/mock.server";

export function Filter(){

    const {state,dispatch} = useDataContext();

    function sortByHandler(e){
        dispatch({type:"SORT", payload: e.target.value})
    }

    return (
        <div>
          <div className="title_of_filters">
            {/* <button
              onClick={() => setFilter((openFilter) => !openFilter)}
              className="p link-no-style pointer-event-none-L text-regular-weight"
            >
              {openFilter ? "APPLY" : "FILTERS"}
            </button> */}
            <button
              onClick={() => {
                dispatch({ type: "CLEAR_FILTERS" });
              }}
              className="button-secondary"
            >
              CLEAR ALL
            </button>
          </div>
    
          <ul className="list-style-none filter-section">
            <hr className="filter-divider-line" />
            <li className="text-regular-weight filter-section-title">Sort by</li>
            <li>
              <label className="form-label">
                <input
                  className="form-checkbox-field"
                  type="radio"
                  name="sort"
                  value="HIGH_TO_LOW_PRICE"
                  onChange={sortByHandler}
                  checked={"HIGH_TO_LOW_PRICE" === state.sortBy}
                />
                Price High to low
              </label>
            </li>
            <li>
              <label className="form-label">
                <input
                  className="form-checkbox-field"
                  type="radio"
                  name="sort"
                  value="LOW_TO_HIGH_PRICE"
                  checked={"LOW_TO_HIGH_PRICE" === state.sortBy}
                  onChange={sortByHandler}
                />
                Price Low to High
              </label>
            </li>
            <hr className="filter-divider-line" />
            <li className="text-regular-weight filter-section-title">Categories</li>
    
            {categories.map((category) => {
              return (
                <li key={category}>
                  <label className="form-label">
                    <input
                      className="form-checkbox-field"
                      type="checkbox"
                      checked={state.filters.filterByCategories.includes(
                        category
                      )}
                      onChange={() => {
                        dispatch({
                          type: "FILTER_BY_CATEGORIES",
                          payload: category
                        });
                      }}
                    />
                    {category}
                  </label>
                </li>
              );
            })}
    
            <hr className="filter-divider-line" />
            <li className="text-regular-weight filter-section-title">Other</li>
            <li>
              <label className="form-label">
                <input
                  className="form-checkbox-field"
                  type="checkbox"
                  checked={state.filters.includeOutOfStock}
                  onChange={() => {
                    dispatch({
                      type: "INCLUDE_OUT_OF_STOCK",
                      payload: !state.filters.includeOutOfStock
                    });
                  }}
                />
                Include out of stock
              </label>
            </li>
          </ul>
        </div>
      );
}