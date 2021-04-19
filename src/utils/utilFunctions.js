export const getSortedData = (state, data) => {
  if (state.sortBy === "HIGH_TO_LOW_PRICE") {
    return [...data].sort((product1, product2) => {
      return Number(product2.price) - Number(product1.price);
    });
  }
  if (state.sortBy === "LOW_TO_HIGH_PRICE") {
    return [...data].sort((product1, product2) => {
      return Number(product1.price) - Number(product2.price);
    });
  }
  return data;
};

export const getFilteredData = (state, data) => {
  let newData = [...data];
  if (!state.filters.includeOutOfStock) {
    newData = newData.filter((product) => product.inStock);
  }
  if (state.filters.filterByCategories.length !== 0)
    newData = newData.filter((product) =>
      state.filters.filterByCategories.includes(product.category)
    );
  return newData;
};

export const filterDataOnStatus = (data) => {
  return data.filter((item) => item.status.exists);
};

export const isAdded = (items, id) => {
    for (let item of items) {
      if (item.id === id) return true;
    }
    return false;
  };
  
  export const checkStatus = (items, id) => {
    for (let item of items) {
      if (item.id === id && item.status.exists) return true;
    }
    return false;
  };
  
  export const toggleStatus = (items, id) => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, status: { exists: !item.status.exists } };
      } else {
        return item;
      }
    });
  };
  export const removeItemFromCart = (items, id) => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, cartQty: 1, status: { exists: false } };
      } else {
        return item;
      }
    });
  };
  export const addItemChangeStatus = (items, id) => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, status: { exists: true } };
      } else {
        return item;
      }
    });
  };
  export const updateQtyInCart = (items, id, incOrDec) =>
    items.map((item) =>
      item.id === id
        ? {
            ...item,
            cartQty: incOrDec ? item.cartQty + 1 : item.cartQty - 1
          }
        : item
    );
  
  export const addNewItem = (items, item) => [
    ...items,
    { ...item, cartQty: 1 }
  ];
  
  export const removeItem = (items, removeItemId) =>
    items.filter((item) => item.id !== removeItemId);