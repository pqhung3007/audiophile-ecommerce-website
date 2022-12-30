import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { loadCart, saveCart } from "../utils/localStorage";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// subscribe to the store change: https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67
store.subscribe(() => saveCart(store.getState().cart));

export type RootState = ReturnType<typeof store.getState>;
