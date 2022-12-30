import { CartSlice } from "../features/cartSlice";

export const loadCart = (): CartSlice | undefined => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
  }
};

export const saveCart = (cart: CartSlice) => {
  try {
    const serializedState = JSON.stringify(cart);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.log(`Error saving to local storage: ${error}`);
  }
};
