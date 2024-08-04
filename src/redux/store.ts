import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../redux/slices/menu/sliceMenu';
import smartBuySlice from './slices/smartBuy/smartBuySlice';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    smartBuy: smartBuySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
