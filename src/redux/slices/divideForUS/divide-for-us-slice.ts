import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  nameItem: string;
  amountPeople: number;
  totalValue: number;
  valueByPeople: number;
  amountItem: number;
}

export const initialState: InitialState = {
  nameItem: '',
  amountPeople: 0,
  totalValue: 0,
  valueByPeople: 0,
  amountItem: 1,
};
export const divideManagerSlice = createSlice({
  name: 'divideForUS',
  initialState: initialState,
  reducers: {
    addAmountPeople(state, { payload }: PayloadAction<number>): InitialState {
      return { ...state, amountPeople: payload };
    },
  },
});

export const { addAmountPeople } = divideManagerSlice.actions;

export default divideManagerSlice.reducer;
