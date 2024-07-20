'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu } from '@/redux/slices/menu/sliceMenu';
import Link from 'next/link';
import { RootState } from '@/redux/store';

const Navbar = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);

  const handleClick = () => {
    dispatch(openMenu());
  };
  return (
    <nav
      className={`${menu.classNavbar} ${styles.mainNavbar}`}
      aria-label="navbar"
    >
      <Link href="/" onClick={handleClick}>
        <span>
          Convertor de Textos
          <div></div>
        </span>
      </Link>
      <Link href="/" onClick={handleClick}>
        <span>
          Compra Inteligênte
          <div></div>
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
