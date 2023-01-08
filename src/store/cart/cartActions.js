import { createAction } from "../../utils/helpers/reducer";
import CART_REDUCER_TYPES from "./cartTypes";

const addCartItem = (cartItems, menuItem) => {
  const existingItem = cartItems.find((item) => item.id === menuItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === menuItem.id
        ? { ...item, quantity: +item.quantity + +menuItem.quantity }
        : item
    );
  } else {
    return [...cartItems, menuItem];
  }
};

const removeCartItem = (cartItems, menuItem) => {
  const newcartItems = cartItems.map((item) =>
    item.id === menuItem.id ? { ...item, quantity: +item.quantity - 1 } : item
  );
  return newcartItems.filter((item) => item.quantity > 0);
};

export const addItemToCart = (cartItems, menuItem) => {
  const newCartItems = addCartItem(cartItems, menuItem);
  return createAction(CART_REDUCER_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, menuItem) => {
  const newCartItems = removeCartItem(cartItems, menuItem);
  return createAction(CART_REDUCER_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearCart = () =>
  createAction(CART_REDUCER_TYPES.SET_CART_ITEMS, []);

export const setIsCartOpen = () =>
  createAction(CART_REDUCER_TYPES.SET_IS_CART_OPEN);
