import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { GetBrandItem } from "../../../layouts/dashboard/pages/Brands/types";
import { SelectedItemDashboard } from "../../types";

export interface SelectedItemState {
  itemData: {
    item: GetBrandItem | null;
    status: "view" | "edit" | "delete" | "";
  };
}

const initialState: SelectedItemState = {
  itemData: {
    item: null,
    status: "",
  },
};

export const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<SelectedItemDashboard>) => {
      state.itemData = action.payload.itemData;
    },
  },
});

export const { selectItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;
