import { createSelector } from "reselect";

const cartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [cartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [cartReducer],
  (cartSlice) => cartSlice.isCartOpen
);
