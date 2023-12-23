import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { BasketProduct } from "../types";

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
        (item) => item.id === action.payload.id
      );

      let subtotal = found?.subtotal;

      if (found && found.quantity) {
        if (action.payload.quantity > 1) {
          found.quantity += action.payload.quantity;
          // TO-DO
          subtotal = found.quantity * found.price;
          state.total += found.price * action.payload.quantity;
        } else if (action.payload.quantity === 1 && found.subtotal) {
          found.quantity++;
          found.subtotal = found.price * found.quantity;
          state.total += found.price;
        }
      } else {
        subtotal = action.payload.price;
        if (action.payload.quantity > 1) {
          subtotal = action.payload.price * action.payload.quantity;
        }

        state.basketProducts.unshift({ ...action.payload, subtotal });
        state.total += subtotal;
      }
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
