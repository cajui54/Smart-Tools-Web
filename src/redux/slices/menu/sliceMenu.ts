import { createSlice } from '@reduxjs/toolkit';
import { MenuSlice } from '../../../interfaces/menu';

export const initialState: MenuSlice = {
  open: false,
  classBurger: '',
  classNavbar: 'animationNavbar',
};
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      if (!state.open) {
        return {
          open: true,
          classBurger: 'animationButtonBurger',
          classNavbar: '',
        };
      } else {
        return initialState;
      }
    },
  },
});

export const { openMenu } = menuSlice.actions;

export default menuSlice.reducer;
