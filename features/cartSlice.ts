import { createSlice } from "@reduxjs/toolkit";
import { CartItems } from "../models/Product";

interface CartSlice {
  cartItems: CartItems[];
  totalPrice: number;
  amount: number;
}

const initialState: CartSlice = {
  cartItems: [],
  totalPrice: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const addedItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === addedItem.id
      );
      existingItem
        ? (existingItem.quantity += addedItem.quantity)
        : state.cartItems.push(addedItem);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
