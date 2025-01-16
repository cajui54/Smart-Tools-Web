import { Item } from '@/interfaces/smartBuy';

export const setCartStorage = (key: string, value: Item) => {
  if (Object.keys(getCartStorage(key)).length > 0) {
  }
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getCartStorage = (key: string) => {
  const itemsStorage = sessionStorage.getItem(key);

  const items = itemsStorage ? JSON.parse(itemsStorage) : [];

  return items;
};
