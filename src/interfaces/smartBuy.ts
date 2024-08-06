export interface Item {
  name: string;
  price: number;
  amout: number;
  total: number;
}
export interface ISmartBuy {
  valueTotal: number;
  valueCurrent: number;
  valueSpend: number;
  showForm: boolean;
  items: Item[];
}
