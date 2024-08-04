'use client';
import React from 'react';
import styles from './styles.module.scss';
import ScreenResult from '../paniel_results';
import FormTotal from './formTotal';
import FormManager from './formManger';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const MainForm = () => {
  const { showForm } = useSelector((state: RootState) => state.smartBuy);
  return (
    <div className={styles.mainForm}>
      <ScreenResult />
      <FormTotal />
      {showForm && <FormManager />}
    </div>
  );
};

export default MainForm;
