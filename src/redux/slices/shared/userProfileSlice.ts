import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileTypes } from "../../types";

const initialState: ProfileTypes = {
  admin: {
    token: "",
    user: null,
  },
  client: {
    token: "",
    user: null,
  },
};

export const adminProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    addAdminInfo: (state, action: PayloadAction<Profile>) => {
      state.admin.token = action.payload.token;
      state.admin.user = action.payload.user;
    },
    addClientInfo: (state, action: PayloadAction<Profile>) => {
      state.client.token = action.payload.token;
      state.client.user = action.payload.user;
    },
  },
});

export const { addAdminInfo, addClientInfo } = adminProfileSlice.actions;

export default adminProfileSlice.reducer;
