import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CartItems } from "../models/Product";

interface CartSlice {
  cartItems: CartItems[];
  totalQuantity: number;
}

const initialState: CartSlice = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: () => {
      return initialState;
    },
    addItemToCart: (state, action: PayloadAction<CartItems>) => {
      const addedItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === addedItem.id
      );
      existingItem
        ? (existingItem.quantity += addedItem.quantity)
        : state.cartItems.push(addedItem);

      state.totalQuantity += addedItem.quantity;
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity++;
      const newCart = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      state.cartItems = newCart;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity--;
      const newCart = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      state.cartItems = newCart;
    },
  },
});

export const totalQuantity = (state: RootState) => state.cart.totalQuantity;

export const totalPrice = (state: RootState) => {
  const total = state.cart.cartItems.reduce((accumulator, currentItem) => {
    const { price, quantity } = currentItem;
    accumulator += price * quantity;
    return accumulator;
  }, 0);
  return total;
};

export const cartItems = (state: RootState) => state.cart.cartItems;

export const { addItemToCart, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
