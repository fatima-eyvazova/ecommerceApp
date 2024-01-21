import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { BasketProduct } from "../../types";

export interface BasketState {
  basketProducts: BasketProduct[];
  total: number;
}

const initialState: BasketState = {
  basketProducts: [],
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (
      state,
      action: PayloadAction<Omit<BasketProduct, "subtotal">>
    ) => {
      const found = state.basketProducts.find(
        (item) => item._id === action.payload._id
      );

      let subtotal = found?.subtotal;

      if (found && found.quantity) {
        const price = found?.salePrice || found?.productPrice;

        if (action.payload.quantity > 1) {
          found.quantity += action.payload.quantity;
          subtotal = found.quantity * price;
          state.total += price * action.payload.quantity;
        } else if (action.payload.quantity === 1 && found.subtotal) {
          found.quantity++;
          found.subtotal = price * found.quantity;
          state.total += price;
        }
      } else {
        const price = action.payload?.salePrice || action.payload?.productPrice;
        subtotal = price;
        if (action.payload.quantity > 1) {
          subtotal = price * action.payload.quantity;
        }

        state.basketProducts.unshift({ ...action.payload, subtotal });
        state.total += subtotal;
      }
    },

    clearBasket: (state) => {
      state.basketProducts.length = 0;
      state.total = 0;
    },

    removeItem: (
      state,
      action: PayloadAction<{ _id: string | number; subtotal: number }>
    ) => {
      state.basketProducts = state.basketProducts.filter(
        (item) => item._id !== action.payload._id
      );
      state.total -= action.payload.subtotal;
    },

    decreaseItem: (
      state,
      action: PayloadAction<{ _id: string | number; price: number }>
    ) => {
      const found = state.basketProducts.find(
        (item) => item._id === action.payload._id
      );

      if (found && found.quantity > 1) {
        found.quantity--;
        found.subtotal -= action.payload.price;
        state.total -= action.payload.price;
      } else if (found && found.quantity === 1) {
        state.basketProducts = state.basketProducts.filter(
          (item) => item._id !== action.payload._id
        );
        state.total -= action.payload.price;
      }
    },
  },
});

export const { addToBasket, clearBasket, removeItem, decreaseItem } =
  basketSlice.actions;

export default basketSlice.reducer;
