'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu } from '@/redux/slices/menu/sliceMenu';
import styles from './styles.module.scss';
import { RootState } from '@/redux/store';
const ButtonBuger = () => {
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openMenu());
  };
  return (
    <div
      aria-label="btnMenu"
      className={styles.btnBurgeMenu}
      onClick={handleClick}
    >
      <div
        aria-label="burgeButton"
        className={`${styles.burge} ${menu.classBurger}`}
      ></div>
    </div>
  );
};

export default ButtonBuger;
