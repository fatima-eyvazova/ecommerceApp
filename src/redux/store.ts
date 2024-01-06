import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import basketSliceReducer from "./slices/site/basketSlice";
import wishListSliceReducer from "./slices/site/wishListSlice";
import adminProfileSliceReducer from "./slices/dashboard/adminProfileSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  basket: basketSliceReducer,
  wishList: wishListSliceReducer,
  adminProfile: adminProfileSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
