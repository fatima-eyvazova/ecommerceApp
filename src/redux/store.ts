import { configureStore } from "@reduxjs/toolkit";

import basketSliceReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketSliceReducer,
  },
});
