import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import basketSliceReducer from "./slices/site/basketSlice";
import wishListSliceReducer from "./slices/site/wishListSlice";
import authSliceReducer from "./slices/shared/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  basket: basketSliceReducer,
  wishList: wishListSliceReducer,
  auth: authSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
