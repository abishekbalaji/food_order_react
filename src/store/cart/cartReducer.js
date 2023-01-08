import CART_REDUCER_TYPES from "./cartTypes";

const INITIAL_CART_REDUCER_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_CART_REDUCER_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_REDUCER_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_REDUCER_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
