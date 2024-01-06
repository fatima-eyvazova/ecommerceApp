import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WishListProduct } from "../../types";

export interface WishListState {
  wishListProducts: WishListProduct[];
}

const initialState: WishListState = {
  wishListProducts: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    handleWishList: (state, action: PayloadAction<WishListProduct>) => {
      const foundElement = state.wishListProducts.find((item) => {
        return item.id === action.payload.id;
      });

      if (foundElement) {
        state.wishListProducts = state.wishListProducts.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishListProducts.unshift(action.payload);
      }
    },
  },
});

export const { handleWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
