import { configureStore } from "@reduxjs/toolkit";

import basketSliceReducer from "./slices/basketSlice";
import wishListSliceReducer from "./slices/wishListSlice";

export const store = configureStore({
  reducer: {
    basket: basketSliceReducer,
    wishList: wishListSliceReducer,
  },
});
