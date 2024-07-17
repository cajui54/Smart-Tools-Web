import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MenuSlice {
  open: boolean;
}

const initialState: MenuSlice = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state, { payload }: PayloadAction<MenuSlice>) => {
      if (!payload.open) {
        state = payload;
      }
    },
  },
});

export const { openMenu } = menuSlice.actions;

export default menuSlice.reducer;
