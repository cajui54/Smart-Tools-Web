import React from 'react';
import { Metadata } from 'next';
import styles from './style.module.scss';
import TitlesComponent from '@/app/_components/titles';
import { BsCart4 } from 'react-icons/bs';
import MainForm from './_components/form';
import ArticleSmartBuy from './_components/article';

export const metadata: Metadata = {
  title: 'Smart Buy - Smart Tools Web',
  description:
    'Matenha sua compras sobre controle, esse site vai te ajuda a gerenciar seus gasto de uma forma fácil e eficiênte',
  keywords:
    'Smart Tools Web, calculadora, compras, gastos, gerenciador de gasto',
  icons: {
    icon: ['./logo.png'],
    apple: ['./logo.png'],
    shortcut: ['./logo.png'],
  },
};
const titleData = {
  svg: BsCart4,
  title: 'Smart',
  subtitle: 'Buy',
  description: 'Matenhas suas compras sobre controle',
};
const SmartBuy = () => {
  return (
    <main className={styles.mainStyle}>
      <TitlesComponent {...titleData} />
      <MainForm />
      <ArticleSmartBuy />
    </main>
  );
};

export default SmartBuy;
