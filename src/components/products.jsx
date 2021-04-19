import React from "react";
import { useDataContext } from "../contexts/DataContext";
import { getSortedData, getFilteredData } from '../utils/utilFunctions';
import {ProductCard} from "./productCard.jsx";
import { Filter } from './filter.jsx';

export default function Products() {

  const {state} = useDataContext();
  const sortedData = getSortedData(state, state.products);
  const filteredData = getFilteredData(state,sortedData);
  return (
    <>
      <h5>
        Strength Training Equipment{" "}
        <span className="text-light-weight"> - {filteredData.length} items</span>
      </h5>
      <div className="display-flex-filter">
        <div className="grid-left-filter">
          <Filter />
        </div>
        <div className="grid-4-column-layout grid-right-of-filter padding-around-1rem">
          {filteredData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
