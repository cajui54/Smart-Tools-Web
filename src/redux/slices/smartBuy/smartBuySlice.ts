import { ISmartBuy } from '@/interfaces/smartBuy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IData {
  item: string;
  price: number;
  amount: number;
}
export const initialState: ISmartBuy = {
  valueTotal: 0,
  valueCurrent: 0,
  valueSpend: 0,
  showForm: false,
};
const smartBuySlice = createSlice({
  name: 'smartBuy',
  initialState: initialState,
  reducers: {
    addValueTotal(state, { payload }: PayloadAction<number>) {
      state.valueTotal += payload;
      state.valueCurrent += payload;
      state.showForm = true;
      return state;
    },
    closeForm(state, { payload }: PayloadAction<ISmartBuy>) {
      state = payload;
      return state;
    },
    addItem(state, { payload }: PayloadAction<IData>) {
      const totalPrice = payload.price * payload.amount;
      state.valueCurrent -= totalPrice;
      state.valueSpend += totalPrice;
      return state;
    },
  },
});
export const { addValueTotal, closeForm, addItem } = smartBuySlice.actions;
export default smartBuySlice.reducer;