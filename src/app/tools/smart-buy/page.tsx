import React from 'react';
import { Metadata } from 'next';
import mainStyle from '../mainStyle.module.scss';
import styles from './style.module.scss';
import TitlesComponent from '@/app/components/titles';
import { BsCart4 } from 'react-icons/bs';
import MainForm from './_components/form';
export const metadata: Metadata = {
  title: 'Compra Inteligênte - Smart Tools Web',
  description:
    'Matenha sua compras sobre controle, esse site te ajuda a gerenciar seus gasto de uma forma fácil e eficiênte',
  keywords:
    'Smart Tools Web, calculadora, compras, gastos, gerenciador de gasto',
};
const titleData = {
  svg: BsCart4,
  title: 'Smart Buy',
  subtitle: 'Matenhas suas compras sobre controle',
};
const SmartBuy = () => {
  return (
    <main className={styles.mainStyle}>
      <TitlesComponent {...titleData} />
      <MainForm />
    </main>
  );
};

export default SmartBuy;
