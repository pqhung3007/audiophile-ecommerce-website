import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
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
    addItemToCart: (state, action: PayloadAction<CartItems>) => {
      const addedItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === addedItem.id
      );
      existingItem
        ? (existingItem.quantity += addedItem.quantity)
        : state.cartItems.push(addedItem);

      state.totalQuantity += addedItem.quantity;
      state.totalPrice += addedItem.quantity * addedItem.price;
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
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

export const {
  addItemToCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;

export const totalQuantity = (state: RootState) => state.cart.totalQuantity;
export const totalPrice = (state: RootState) => state.cart.totalPrice;

export default cartSlice.reducer;
