import React from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { convertBrMoney } from '@/utils/formatMoney';

const ListItems = () => {
  const { items } = useSelector((state: RootState) => state.smartBuy);
  return (
    <div className={styles.main}>
      <h2>Itens na Lista</h2>
      <ul className={styles.containerListItem}>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <span>item</span>
              <span>{item.name}</span>
            </div>
            <div>
              <span>Preço</span>
              <span>{convertBrMoney(item.price)}</span>
            </div>
            <div className="amountItem">
              <span>Quant.</span>
              <span>{item.amout}</span>
            </div>
            <div>
              <span>Total:</span>
              <span>{convertBrMoney(item.total)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
