import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../types";

const initialState: Profile = {
  token: "",
  user: null,
};

export const adminProfileSlice = createSlice({
  name: "adminProfile",
  initialState,
  reducers: {
    addAdminInfo: (state, action: PayloadAction<Profile>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { addAdminInfo } = adminProfileSlice.actions;

export default adminProfileSlice.reducer;
