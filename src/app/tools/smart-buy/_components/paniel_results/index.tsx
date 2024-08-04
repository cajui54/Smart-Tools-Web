'use client';
import React from 'react';
import styles from './styles.module.scss';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { GiMoneyStack, GiPayMoney } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { convertBrMoney } from '@/utils/formatMoney';

const ScreenResult = () => {
  const { valueTotal, valueCurrent, valueSpend } = useSelector(
    (state: RootState) => state.smartBuy
  );
  return (
    <div className={styles.mainScreen}>
      <div className={styles.containerResult}>
        <span>Valor Total:</span>

        <div>
          <FaMoneyBill1Wave />
          <span>{convertBrMoney(valueTotal)}</span>
        </div>
      </div>

      <div className={styles.containerResult}>
        <span>Valor atual:</span>

        <div>
          <GiMoneyStack />

          <span>{convertBrMoney(valueCurrent)}</span>
        </div>
      </div>

      <div className={styles.containerResult}>
        <span>Valor gasto:</span>

        <div>
          <GiPayMoney />

          <span>{convertBrMoney(valueSpend)}</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenResult;
