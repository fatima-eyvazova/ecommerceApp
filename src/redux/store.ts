import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});
