import {
  isAdded,
  updateQtyInCart,
  addNewItem,
  toggleStatus,
  removeItemFromCart,
} from "../utils/utilFunctions";

function addRemoveItemToWishList(state, action) {
  if (isAdded(state.wishlist, action.payload.id)) {
    return {
      ...state,
      wishlist: toggleStatus(state.wishlist, action.payload.id),
    };
  } else {
    return {
      ...state,
      wishlist: addNewItem(state.wishlist, {
        ...action.payload,
        status: { exists: true },
      }),
    };
  }
}

function addToCart(state, action) {
  if (isAdded(state.cart, action.payload.id)) {
    return {
      ...state,
      cart: toggleStatus(state.cart, action.payload.id),
    };
  } else {
    return {
      ...state,
      cart: addNewItem(state.cart, {
        ...action.payload,
        status: { exists: true },
      }),
    };
  }
}

function filterByCategory(state, action) {
  if (state.filters.filterByCategories.includes(action.payload)) {
    return {
      ...state,
      filters: {
        ...state.filters,
        filterByCategories: state.filters.filterByCategories.filter(
          (item) => item !== action.payload
        ),
      },
    };
  } else
    return {
      ...state,
      filters: {
        ...state.filters,
        filterByCategories: state.filters.filterByCategories.concat(
          action.payload
        ),
      },
    };
}

export function dataReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_CART":
      return { ...state, cart: action.payload };

    case "SET_WISHLIST":
      return { ...state, wishlist: action.payload };

    case "ADD_REMOVE_ITEM_TO_WISHLIST":
      return addRemoveItemToWishList(state, action);

    case "ADD_TO_CART":
      return addToCart(state, action);

    case "INC_ITEM_QTY_IN_CART":
      return {
        ...state,
        cart: updateQtyInCart(state.cart, action.payload.id, true),
      };

    case "DEC_ITEM_QTY_IN_CART":
      return {
        ...state,
        cart: updateQtyInCart(state.cart, action.payload.id, false),
      };

    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: removeItemFromCart(state.itemsInCart, action.payload.id),
      };

    case "SORT": {
      if (action.payload === "HIGH_TO_LOW_PRICE") {
        return { ...state, sortBy: "HIGH_TO_LOW_PRICE" };
      }
      if (action.payload === "LOW_TO_HIGH_PRICE")
        return { ...state, sortBy: "LOW_TO_HIGH_PRICE" };
      return { ...state, sortBy: "" };
    }

    case "INCLUDE_OUT_OF_STOCK": {
      return {
        ...state,
        filters: { ...state.filters, includeOutOfStock: action.payload },
      };
    }

    case "FILTER_BY_CATEGORIES":
      return filterByCategory(state, action);
      
    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortBy: "",
        filters: {
          includeOutOfStock: true,
          filterByCategories: [],
        },
      };
    }

    default:
      return state;
  }
}
