'use client';
import React from 'react';
import styles from './styles.module.scss';
import { IoIosPeople } from 'react-icons/io';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { convertBrMoney } from '@/utils/formatMoney';

const ScreenManager = () => {
  const { amountPeople, totalValue, valueByPeople } = useSelector(
    (state: RootState) => state.divideForUS
  );

  return (
    <div className={styles.mainScreenManager}>
      <div>
        <span>Pessoas</span>
        <span>
          {amountPeople}
          <IoIosPeople />
        </span>
      </div>
      <div>
        <span>Valor Total</span>
        <span>
          {convertBrMoney(totalValue)}
          <GiMoneyStack />
        </span>
      </div>
      <div>
        <span>Valor por pessoa</span>
        <span>
          {convertBrMoney(valueByPeople)}
          <GiTakeMyMoney />
        </span>
      </div>
    </div>
  );
};

export default ScreenManager;
