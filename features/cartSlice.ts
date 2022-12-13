import { createSlice } from "@reduxjs/toolkit";
import { CartItems } from "../models/Product";

interface CartSlice {
  cartItems: CartItems[];
  totalPrice: number;
  totalQuantity: number;
}

const initialState: CartSlice = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: () => {
      return initialState;
    },
    addItemToCart: (state, action) => {
      const addedItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === addedItem.id
      );
      state.totalQuantity += addedItem.quantity;
      state.totalPrice += addedItem.quantity * addedItem.price;

      existingItem
        ? (existingItem.quantity += addedItem.quantity)
        : state.cartItems.push(addedItem);
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        state.cartItems.filter((item) => item.quantity > 0);
      }
    },
    calculateTotal: (state) => {
      let quantity = 0;
      let price = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        price += item.quantity * item.price;
      });
      state.totalQuantity = quantity;
      state.totalPrice = price;
    },
  },
});

export const { addItemToCart, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
