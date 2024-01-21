import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetProductItem } from "../../../layouts/dashboard/pages/ProductsDashboard/types";

export interface WishListState {
  wishListProducts: GetProductItem[];
}

const initialState: WishListState = {
  wishListProducts: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    handleWishList: (state, action: PayloadAction<GetProductItem>) => {
      const foundElement = state.wishListProducts.find((item) => {
        return item._id === action.payload._id;
      });

      if (foundElement) {
        state.wishListProducts = state.wishListProducts.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.wishListProducts.unshift(action.payload);
      }
    },
  },
});

export const { handleWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
