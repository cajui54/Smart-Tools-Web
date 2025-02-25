import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../redux/slices/menu/sliceMenu';
import smartBuySlice from './slices/smartBuy/smartBuySlice';
import divideManagerSlice from './slices/divideForUS/divide-for-us-slice';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    smartBuy: smartBuySlice,
    divideForUS: divideManagerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
